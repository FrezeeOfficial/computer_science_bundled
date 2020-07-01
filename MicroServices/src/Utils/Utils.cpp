//
// Created by pc on 01/07/2020.
//

#include "../../include/Utils/Utils.hpp"

json Utils::parse_json(std::string file_name) {
    std::ifstream file("../config/" + file_name);
    json json_file;
    file >> json_file;

    return json_file;
};

json Utils::get_config_micro_service(std::string micro_service_name, json config) {
    json micro_service_config;
    for(int i = 0; i < config["MicroServices"].size(); i++) {
        if (config["MicroServices"][i]["service_name"] == micro_service_name) {
            micro_service_config = config["MicroServices"][i];
        }
    }

    return micro_service_config;
};