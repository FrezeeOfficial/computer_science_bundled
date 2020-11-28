//
// Created by James on 13/10/2020.
//

#include "../../../include/Interfaces/Socket.hpp"
#include "iostream"

void Interfaces::Socket::push_token(){

}

void Interfaces::Socket::push_pin(){

}

std::string Interfaces::Socket::fetch_uuid(){
    return("2912-383771nd-91jxjd-18273");
}

//FIXME: currently there is not database so it will user 11111... as the token
bool Interfaces::Socket::is_authenticated(nlohmann::json payload) {
    // get json payload
    // for now the token used is 11111-11111-11111-11111-11111. Will be connected to a database later on.
    if(payload["token"] == "11111-11111-11111-11111-11111") {
        return true;
    } else {
        return false;
    }
}

void Interfaces::Socket::return_error(connection_hdl hdl, std::string readable_error, std::string error_code) {
    m_server.send(hdl, "{error: true, res: " + error_code + ", readable: " + readable_error + "}", websocketpp::frame::opcode::text);
}

void Interfaces::Socket::return_message(connection_hdl hdl, std::string message) {
    m_server.send(hdl, {"{res: " + message + "}"}, websocketpp::frame::opcode::text);
}