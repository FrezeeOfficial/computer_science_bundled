//
// Created by James on 09/08/2020.
//

#include "../../include/Interfaces/Socket.hpp"
#include "iostream"

Interfaces::Socket::Socket(nlohmann::json config_location) {
    this->config = config_location;

}

void Interfaces::Socket::start_service() {
    std::cout << this->config["socket_name"] <<  ": Initialising Socket" << std::endl;
}