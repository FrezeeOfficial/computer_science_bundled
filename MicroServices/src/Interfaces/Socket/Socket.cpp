//
// Created by James on 09/08/2020.
//

#include "../../../include/Interfaces/Socket.hpp"
#include "iostream"

Interfaces::Socket::Socket(nlohmann::json config_location) {
    this->config = config_location;

    m_server.init_asio();

    m_server.set_open_handler(bind(&Interfaces::Socket::on_open,this,::_1));
    m_server.set_close_handler(bind(&Interfaces::Socket::on_close,this,::_1));
    m_server.set_message_handler(bind(&Interfaces::Socket::on_message,this,::_1,::_2));
}

void Interfaces::Socket::start_service() {
    std::cout << this->config["socket_name"] <<  ": Initialising Socket" << std::endl;

    std::string nport = this->config["port"];
    int port = std::stoi(nport);

    m_server.listen(port);
    m_server.start_accept();
    m_server.run();
}

void Interfaces::Socket::on_message(connection_hdl hdl, server::message_ptr msg) {
    for (auto it : m_connections) {

        // convert recieved payload to a json object
        nlohmann::json jsonMsg;
        std::stringstream(msg->get_payload()) >> jsonMsg;

        // routing
        this->route_message(hdl, jsonMsg);
    }
}

void Interfaces::Socket::route_message(connection_hdl hdl, nlohmann::json jsonMsg) {
    // the data right here will be generated but here for testing purposes
    std::string token = "2913-0192-8172-9281-6571";
    std::string pin = "2910";
    std::string uuid = "11111-11111-11111-11111-11111";

    // find the specific connection
    for (auto it : m_connections) {
        // level routing
        // -----------------------------------------------------------------------------------------------------
        if (jsonMsg["level"] == 6) {
        Interfaces::Socket::Routes::lvl6(hdl, jsonMsg, jsonMsg["command"]);

            if (jsonMsg["command"] == "push_token") {
                // pretends that the user name is ok
                m_server.send(it, "{success: true}", websocketpp::frame::opcode::text);
            } else if (jsonMsg["command"] == "push_pin") {
                // pretends that the token supplied is good
                m_server.send(it, "{success: true}", websocketpp::frame::opcode::text);
            } else if (jsonMsg["command"] == "fetch_uuid") {
                // pretends that the token supplied is good
                if (jsonMsg["token"] == token && jsonMsg["pin"] == pin) {
                    m_server.send(it, "{uuid: " + uuid + "}", websocketpp::frame::opcode::text);
                } else {
                    m_server.send(it, "{success: false}", websocketpp::frame::opcode::text);
                }
            }
        }
        // -----------------------------------------------------------------------------------------------------
        if (jsonMsg["level"] == 5) {

        }
        // -----------------------------------------------------------------------------------------------------
    }
}

void Interfaces::Socket::on_close(connection_hdl hdl) {
    m_connections.erase(hdl);
}

void Interfaces::Socket::on_open(connection_hdl hdl) {
    m_connections.insert(hdl);
}

bool Interfaces::Socket::authorise(std::string token) {
    if (token == "11111-11111-11111-11111-11111") {
        return true;
    } else {
        return false;
    }
}

void Interfaces::Socket::authenticate(){

}

void Interfaces::Socket::custom_on_msg(server & s, connection_hdl hdl, server::message_ptr msg) {
    std::cout << "Message sent to custom handler" << std::endl;
}