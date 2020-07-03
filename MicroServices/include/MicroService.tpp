//
// Created by pc on 30/06/2020.
//

#ifndef MICROSERVICES_MICROSERVICE_TPP
#define MICROSERVICES_MICROSERVICE_TPP
#include "string"
#include <iostream>
#include <vector>
#include "../lib/json.hpp"
#include "./MicroServiceController.hpp"
#include "../src/Interfaces/Rest.cpp"
#include "../src/Interfaces/Socket.cpp"
#include "./Utils/Utils.hpp"

// the template that all microservices must use
class MicroService {
public:
        struct st_MicroService {
        bool use_socket;
        bool use_rest;
        bool is_interconnected;
        std::string service_name;
        nlohmann::json socket_data;
        nlohmann::json rest_data;
    };

    static st_MicroService build_config(nlohmann::json config_json);

    virtual void start_service() {
        std::cout << "Error: " << this->config.service_name << " has incomplete function list" << std::endl;
    }

    MicroService(st_MicroService config);

    std::string get_service_name() { return this->config.service_name; };

protected:
    // main service query
    bool running;
    int status;

    InterfaceManager::MicroServiceController *rest;
    InterfaceManager::MicroServiceController *socket;

    st_MicroService config;
};

#endif //MICROSERVICES_MICROSERVICE_TPP
