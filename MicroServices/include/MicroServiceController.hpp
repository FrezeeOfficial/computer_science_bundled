//
// Created by pc on 01/07/2020.
//

#ifndef MICROSERVICES_MICROSERVICECONTROLLER_HPP
#define MICROSERVICES_MICROSERVICECONTROLLER_HPP
#include "../lib/json.hpp"
#include <iostream>

namespace InterfaceManager {
    class MicroServiceController {
    public:
        MicroServiceController() {

        }
        virtual void start_interface();
        // virtual void handle_request();


    protected:
        nlohmann::json json_config_data;
    };
}


#endif //MICROSERVICES_MICROSERVICECONTROLLER_HPP
