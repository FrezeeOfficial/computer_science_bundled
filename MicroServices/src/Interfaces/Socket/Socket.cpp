//
// Created by James on 09/08/2020.
//

#include "../../../include/Interfaces/Socket.hpp"
#include "iostream"

// just creates instance of socket
Interfaces::Socket::Socket(nlohmann::json config_location) {
    this->config = config_location;

    m_server.init_asio();

    m_server.set_open_handler(bind(&Interfaces::Socket::on_open,this,::_1));
    m_server.set_close_handler(bind(&Interfaces::Socket::on_close,this,::_1));
    m_server.set_message_handler(bind(&Interfaces::Socket::on_message,this,::_1,::_2));
}

// starts the socket server
void Interfaces::Socket::start_service() {
    std::cout << this->config["socket_name"] <<  ": Initialising Socket" << std::endl;

    std::string nport = this->config["port"];
    int port = std::stoi(nport);

    m_server.listen(port);
    m_server.start_accept();
    m_server.run();
    this->is_running = true;

}

// will close and sockets on this microservice
void Interfaces::Socket::stop_service(){
    m_server.stop();
    this->is_running = false;
}

// when a new user connects to the server
void Interfaces::Socket::on_open(connection_hdl hdl) {
    server::connection_ptr con = m_server.get_con_from_hdl(hdl);
    std::string path = con->get_resource();

    // check weather user is using the correct url
    std::size_t pos = path.find(this->config["location_path"]);
    if(pos ==1 ){
        // add the connection to the list
        connection_data data;
        m_connections[hdl] = data;
    } else {
        nlohmann::json res;
        res["error"] = true;
        res["readable"] = "you are not authorised to use this service";
        res["error_code"] = "0x10";

        this->return_message(hdl, res);
    }
}

// when a user wants to exit service
void Interfaces::Socket::on_close(connection_hdl hdl) {
    m_connections.erase(hdl);
}