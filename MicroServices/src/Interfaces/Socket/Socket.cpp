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

void Interfaces::Socket::stop_service(){
    m_server.stop();
}

void Interfaces::Socket::on_message(connection_hdl hdl, server::message_ptr msg) {
    // where all messages sent to this server will first be handled
    for (auto it : m_connections) {
        // get payload into json format. If it isn't in proper layout then it will spit an erro which wil be returned in the catch statement
        nlohmann::json jsonMsg;
        try {
            std::stringstream(msg->get_payload()) >> jsonMsg;
        } catch (...) {
            this->return_error(hdl, "json format was incorrect", "0x09");
            break;
        }

        // check weather the token in the message is valid
        if (!is_authenticated(jsonMsg)) {
            this->return_error(hdl, "unknown token", "0x02");
            break;
        }


        this->route_message(hdl, jsonMsg);
    }
}

void Interfaces::Socket::route_message(connection_hdl hdl, nlohmann::json payload) {
    std::string command = payload["command"];


}

void Interfaces::Socket::return_error(connection_hdl hdl, std::string readable_error, std::string error_code) {
    m_server.send(hdl, "{error: true, res: " + error_code + ", readable: " + readable_error + "}", websocketpp::frame::opcode::text);
}

bool Interfaces::Socket::is_authenticated(nlohmann::json payload) {
    // get json payload
    // for now the token used is 11111-11111-11111-11111-11111. Will be connected to a database later on.
    if(payload["token"] == "11111-11111-11111-11111-11111") {
        return true;
    } else {
        return false;
    }
}

void Interfaces::Socket::fetch_dash() {

}

void Interfaces::Socket::on_close(connection_hdl hdl) {
    m_connections.erase(hdl);
}

void Interfaces::Socket::on_open(connection_hdl hdl) {
    // will only accept a connection if the url specifies the location path. Which was set in the [service_name].config.json
    server::connection_ptr con = m_server.get_con_from_hdl(hdl);
    std::string path = con->get_resource();

    std::size_t pos = path.find(this->config["location_path"]);
    if (pos == 1) {
        std::cout << "allowed to connect" << std::endl;
        m_connections.insert(hdl);
    } else {
        std::cout << "not allowed to connect" << std::endl;
    }
}