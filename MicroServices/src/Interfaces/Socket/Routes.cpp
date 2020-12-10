//
// Created by James on 26/10/2020.
//

#include "../../../include/Interfaces/Socket.hpp"
#include "iostream"


void Interfaces::Socket::route_message(connection_hdl hdl, nlohmann::json payload) {
    // where logged in users commands are routed.
    std::string command = payload["command"];

    switch(command){
        case "d":
            // code block
            break;
    }
}