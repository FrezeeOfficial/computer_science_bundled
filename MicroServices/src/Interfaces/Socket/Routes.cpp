//
// Created by James on 26/10/2020.
//

#include "../../../include/Interfaces/Socket.hpp"
#include "iostream"


void Interfaces::Socket::route_message(connection_hdl hdl, nlohmann::json payload) {
    if(payload["command"] == "authenticate") {
        this->authenticate_username(hdl, payload["username"]);
        this->upgrade_authenticated_connection(hdl);

        std::cout << this->get_data_from_hdl(hdl).username << std::endl;
    }
}

// when an existing user sends a query
void Interfaces::Socket::on_message(connection_hdl hdl, server::message_ptr msg) {
    nlohmann::json jsonMsg;
    try {
        std::stringstream(msg->get_payload()) >> jsonMsg;
    } catch (...) {
        nlohmann::json res;
        res["error"] = true;
        res["readable"] = "incorrect json format";
        res["error_code"] = "0x09";
        this->return_message(hdl, res);
    }
    this->route_message(hdl, jsonMsg);

}

void Interfaces::Socket::on_authenticated_message(connection_hdl hdl, server::message_ptr msg) {
        std::cout << "authorised command" << std::endl;
}