//
// Created by pc on 01/07/2020.
//

#ifndef MICROSERVICES_INTERFACEMANAGER_HPP
#define MICROSERVICES_INTERFACEMANAGER_HPP
#include "../lib/json.hpp"
#include <iostream>

namespace InterfaceManager {
    class InterfaceManager {
    public:
        InterfaceManager() {

        }
        virtual void start_interface();

    protected:
        nlohmann::json json_config_data;
    };
}


#endif //MICROSERVICES_INTERFACEMANAGER_HPP
