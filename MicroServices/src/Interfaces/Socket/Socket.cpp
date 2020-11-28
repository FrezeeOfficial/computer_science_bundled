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

    // here we will fill in the function vector maps
    this->function_commands.push_back("logout");

    auto fn = &Interfaces::Socket::function;
    FunctionArray function[] {
        fn
    };


}

void Interfaces::Socket::start_service() {
    std::cout << this->config["socket_name"] <<  ": Initialising Socket" << std::endl;

    std::string nport = this->config["port"];
    int port = std::stoi(nport);

    m_server.listen(port);
    m_server.start_accept();
    m_server.run();
    this->is_running = true;
}

void Interfaces::Socket::stop_service(){
    m_server.stop();
    this->is_running = false;
}


// the entry point of entry for a call
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
            // level 6 is for the initial signing in like pushing pins
            if(jsonMsg["level"] == "6") {
                if (jsonMsg["command"] == "push_token") {
                    // here the app will send a push to the local application on the computer to display a one time token
                    this->push_token();
                    this->return_message(hdl, "sent a push request to interconnect");
                } else if (jsonMsg["command"] == "push_pin") {
                    // here the app will send a push to the local application on the computer to display a one time pin
                    this->push_pin();
                    this->return_message(hdl, "sent a push request to interconnect");
                } else if (jsonMsg["command"] == "fetch_uuid") {
                    // will check all checks have been done, make a uuid, add it to database and then send it back to the cloud app.
                    this->return_message(hdl, this->fetch_uuid());
                } else {
                        this->return_error(hdl, "unknown command", "0x03");
                        break;
                    }
                }
            } else {
                this->route_message(hdl, jsonMsg);
            }
    }
}

void Interfaces::Socket::route_message(connection_hdl hdl, nlohmann::json payload) {
    // routes all the possible commands given that the user is authenticated
    bool does_command_exist = false;

    for(int i = 0; i < this->function_commands.size(); i++) {
        if (this->function_commands.at(i) == payload["command"]) {
            //the function has been found.
            does_command_exist = true;

        }
    }

    if (!does_command_exist) {
        this->return_error(hdl, "the command doesn't exist", "0x04");
    }
}

// when a user terminates connection
void Interfaces::Socket::on_close(connection_hdl hdl) {
    m_connections.erase(hdl);
}

// when a user initially connects to the server
void Interfaces::Socket::on_open(connection_hdl hdl) {
    server::connection_ptr con = m_server.get_con_from_hdl(hdl);
    std::string path = con->get_resource();

    // will only accept a connection if the url specifies the location path. Which was set in the [service_name].config.json
    std::size_t pos = path.find(this->config["location_path"]);
    if (pos == 1) {
        std::cout << "allowed to connect" << std::endl;
        m_connections.insert(hdl);
    } else {
        std::cout << "not allowed to connect" << std::endl;
        this->return_error(hdl, "You are not authorised to access this service", "0x10");
    }
}