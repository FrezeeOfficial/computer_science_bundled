//
// Created by James on 09/08/2020.
//

#ifndef MICROSERVICES_SOCKET_HPP
#define MICROSERVICES_SOCKET_HPP
#include "../../lib/json.hpp"
#include "../Utils/Utils.hpp"
#include <set>

#include "websocketpp/config/asio_no_tls.hpp"
#include <websocketpp/server.hpp>

#include <string>

#endif //MICROSERVICES_SOCKET_HPP

typedef websocketpp::server<websocketpp::config::asio> server;

using websocketpp::connection_hdl;
using websocketpp::lib::placeholders::_1;
using websocketpp::lib::placeholders::_2;
using websocketpp::lib::bind;
#include <websocketpp/config/core.hpp>

namespace Interfaces {
    class Socket {
    public:
        Socket(nlohmann::json config_location);
        void start_service();

        void on_open(connection_hdl hdl);
        void on_close(connection_hdl hdl);
        void on_message(connection_hdl hdl, server::message_ptr msg);

        void authenticate();
    private:
        typedef std::set<connection_hdl,std::owner_less<connection_hdl>> con_list;

        int m_next_sessionid;
        server m_server;
        con_list m_connections;

        nlohmann::json config;
    };
}