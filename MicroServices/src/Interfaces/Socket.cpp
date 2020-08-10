//
// Created by James on 09/08/2020.
//

#include "../../include/Interfaces/Socket.hpp"
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

        std::string val = "Hello, this is a test C++ socket server. This is not in use currently";
        m_server.send(it,val,websocketpp::frame::opcode::text);
    }
}

void Interfaces::Socket::on_close(connection_hdl hdl) {
    m_connections.erase(hdl);
}

void Interfaces::Socket::on_open(connection_hdl hdl) {
    m_connections.insert(hdl);
}

void Interfaces::Socket::authenticate(){

}
