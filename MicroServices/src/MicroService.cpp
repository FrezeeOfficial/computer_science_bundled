//
// Created by pc on 01/07/2020.
//

#include "../include/MicroService.tpp"

MicroService::MicroService(MicroService::st_MicroService config) {
    this->config = config;
}

MicroService::st_MicroService MicroService::build_config(nlohmann::json config_json) {
    MicroService::st_MicroService config;

    bool use_socket              = config_json["use_socket"];
    bool use_rest                = config_json["use_rest"];
    bool is_interconnected       = config_json["is_interconnected"];
    std::string ServiceName      = config_json["service_name"];
    nlohmann::json socket_data   = Utils::parse_json(config_json["socket_data"]);
    nlohmann::json rest_data     = Utils::parse_json(config_json["rest_data"]);

    config.use_socket            = use_socket;
    config.use_rest              = use_rest;
    config.is_interconnected     = is_interconnected;
    config.service_name          = ServiceName;
    config.socket_data           = socket_data;
    config.rest_data             = rest_data;

    return config;
}