//
// Created by pc on 02/07/2020.
//

#include "../../include/InterfaceManager.hpp"
#include <string>
#include "../../include/Utils/Utils.hpp"

namespace InterfaceManager {
    class RestManager:  public InterfaceManager {
    public:
        RestManager(std::string config_file){
            this->json_config_data = Utils::parse_json(config_file);
        }

        void start_interface() {
            std::cout << this->json_config_data["rest_name"] << ": Rest Interface Initialising" << std::endl;
        }
    };
}