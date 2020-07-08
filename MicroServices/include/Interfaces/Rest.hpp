//
// Created by James on 04/07/2020.
//

#ifndef MICROSERVICES_REST_HPP
#define MICROSERVICES_REST_HPP
#include "../../lib/json.hpp"

#include <boost/beast/core.hpp>
#include <boost/beast/http.hpp>
#include <boost/beast/version.hpp>
#include <boost/asio.hpp>
#include <chrono>
#include <cstdlib>
#include <ctime>
#include <iostream>
#include <memory>
#include <string>

namespace beast = boost::beast;
namespace http = beast::http;
namespace net = boost::asio;
using tcp = boost::asio::ip::tcp;

namespace Interfaces {
    class Rest : public std::enable_shared_from_this<Rest> {
       public:
//        Rest(tcp::socket socket)
//        : socket_(std::move(socket))
//        {
//        }

        Rest(tcp::acceptor& acceptor, tcp::socket& socket)
        {
            acceptor.async_accept(socket,
                                  [&](beast::error_code ec)
                                  {
                                      if(!ec)
                                          std::make_shared<Rest>(std::move(socket))->start_service();
                                      Rest(acceptor, socket);
                                  });
        }


        void start_service();

        private:
        nlohmann::json config;

        // currently connected client
        tcp::socket socket_;

        // buffer performing requests
        beast::flat_buffer buffer_{8192};

        // the request message
        http::request<http::dynamic_body> request_;

        // the response message
        http::response<http::dynamic_body> response_;

        // time for connection deadline
        net::steady_timer deadline_{
            socket_.get_executor(), std::chrono::seconds(60)
        };

        // async recieve request message
        void read_request();

        // decide what needs to be done with the request message
        void process_request();

        // create a response
        void create_response();

        // write send res
        void write_responce();

        // spent enough time
        void check_deadline();
    };
}


#endif //MICROSERVICES_REST_HPP
