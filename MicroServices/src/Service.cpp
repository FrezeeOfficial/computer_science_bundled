//
// Created by pc on 30/06/2020.
//

#include "../include/Service.hpp"
#include "./Services/WebService.cpp"
#include "./Services/SoftwareService.cpp"

Service::Service(std::string config_file_name) {
    this->config_data = Utils::parse_json(config_file_name);
    this->load_config();

    this->start_microservices();
};

void Service::start_microservices() {
    for (int i = 0; i < this->microservices.size(); i++) {
        this->microservices.at(i)->start_service();
    }
};

void Service::load_config() {
    // firstly do webserver
    json WebServer_json = Utils::get_config_micro_service("WebService", this->config_data);
    MicroService::st_MicroService WebServer_formatted = MicroService::build_config(WebServer_json);

    WebService *WS = new WebService(MicroService::st_MicroService(), MicroService::st_MicroService());
    this->add_microservice(WS);

};

void Service::add_microservice(MicroService *microservice) {
    this->microservices.push_back( microservice);
};

