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
#include "../../lib/json.hpp"
#include <websocketpp/config/core.hpp>

namespace Interfaces {
    class Socket {
    public:
        struct connection_data{
            std::string username;
            std::string software_uuid;
            std::string software_token;
            std::string software_pin;
        };

        Socket(nlohmann::json config_location);
        void start_service();
        void stop_service();

        void on_open(connection_hdl hdl);
        void on_close(connection_hdl hdl);
        void on_message(connection_hdl hdl, server::message_ptr msg);
        void on_authenticated_message(connection_hdl hdl, server::message_ptr msg);

        connection_data& get_data_from_hdl(connection_hdl hdl);
        void return_message(connection_hdl hdl, nlohmann::json message);

        void route_message(connection_hdl hdl, nlohmann::json payload);

        // Actions.cpp
        void authenticate_username(connection_hdl hdl, std::string username);

        void upgrade_authenticated_connection(connection_hdl hdl);

    private:
        typedef std::map<connection_hdl,connection_data,std::owner_less<connection_hdl>> con_list;
        bool is_running = false;
        server m_server;
        con_list m_connections;

        nlohmann::json config;
    };
}