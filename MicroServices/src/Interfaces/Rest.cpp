//
// Created by James on 04/07/2020.
//

#include "../../include/Interfaces/Rest.hpp"

Interfaces::Rest::Rest(nlohmann::json rest_config) {
    this->config = rest_config;
};

void Interfaces::Rest::start_service() {
    std::cout << this->config["rest_name"] << ": Rest initialising" << std::endl;
};
