//
// Created by pc on 02/07/2020.
//

#include "../../include/MicroServiceController.hpp"
#include "../../include/Utils/Utils.hpp"

#include <iostream>
#include <string>
#include <boost/asio.hpp>

namespace InterfaceManager {
    class RestManager:  public MicroServiceController {
    public:
        RestManager(std::string config_file){
            this->json_config_data = Utils::parse_json(config_file);

        }

        void start_interface() {

            std::cout << this->json_config_data["rest_name"] << ": Rest Interface Initialising" << std::endl;
        }



    private:
        std::string ip;
        std::string port;
    };
}