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

std::string Utils::generate_token(int token_length) {
    auto randchar = []() -> char
    {
        const char charset[] =
                "0123456789"
                "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                "abcdefghijklmnopqrstuvwxyz";
        const size_t max_index = (sizeof(charset) - 1);
        return charset[ rand() % max_index ];
    };
    std::string str(token_length,0);
    std::generate_n( str.begin(), token_length, randchar );
    return str;
}