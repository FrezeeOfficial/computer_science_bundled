//
// Created by pc on 01/07/2020.
//

#ifndef MICROSERVICES_UTILS_HPP
#define MICROSERVICES_UTILS_HPP
#include "../../lib/json.hpp"
#include <fstream>
#include "iostream"

using nlohmann::json;

class Utils {
public:
    static json parse_json(std::string file_name);
    static json get_config_micro_service(std::string micro_service_name, json config);
};


#endif //MICROSERVICES_UTILS_HPP
