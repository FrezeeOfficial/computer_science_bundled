//
// Created by pc on 30/06/2020.
//

#ifndef MICROSERVICES_MICROSERVICE_TPP
#define MICROSERVICES_MICROSERVICE_TPP
#include "string"
#include <iostream>
#include <vector>
#include "../lib/json.hpp"
#include "./InterfaceManager.hpp"
#include "../src/Interfaces/Rest.cpp"
#include "../src/Interfaces/Socket.cpp"

// the template that all microservices must use
class MicroService {
public:
        struct st_MicroService {
        bool use_socket;
        bool use_rest;
        bool is_interconnected;
        std::string service_name;
        std::string socket_data;
        std::string rest_data;
    };

    static st_MicroService build_config(nlohmann::json config_json);

    virtual void start_service() {
        std::cout << "Error: MicroService has incomplete function list" << std::endl;
    }

    MicroService(st_MicroService config);

    std::string get_service_name() { return this->config.service_name; };

protected:
    // main service query
    bool running;
    int status;

    InterfaceManager::InterfaceManager *rest;
    InterfaceManager::InterfaceManager *socket;

    st_MicroService config;
};

#endif //MICROSERVICES_MICROSERVICE_TPP
