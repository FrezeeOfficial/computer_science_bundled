//
// Created by James on 13/10/2020.
//

#include "../../../include/Interfaces/Socket.hpp"
#include "iostream"

void Interfaces::Socket::return_message(connection_hdl hdl, nlohmann::json message) {
    m_server.send(hdl, message.dump(), websocketpp::frame::opcode::text);
}

Interfaces::Socket::connection_data& Interfaces::Socket::get_data_from_hdl(connection_hdl hdl) {
    auto it = m_connections.find(hdl);

    if(it == m_connections.end()) {
        // connection cannot be found
        throw std::invalid_argument("Invalid argument");
    }

    return it->second;
}

void Interfaces::Socket::upgrade_authenticated_connection(connection_hdl hdl) {
    server::connection_ptr con = this->m_server.get_con_from_hdl(hdl);
    con->set_message_handler(bind(&Interfaces::Socket::on_authenticated_message, this,::_1,::_2));

}

void Interfaces::Socket::authenticate_username(connection_hdl hdl, std::string _username) {
    this->get_data_from_hdl(hdl).username = _username;
    std::cout << _username << std::endl;
}