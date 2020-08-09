//
// Created by James on 09/08/2020.
//

#ifndef MICROSERVICES_SOCKET_HPP
#define MICROSERVICES_SOCKET_HPP
#include "../../lib/json.hpp"
#include "../Utils/Utils.hpp"

#include <string>

#endif //MICROSERVICES_SOCKET_HPP

namespace Interfaces {
    class Socket {
    public:
        Socket(nlohmann::json config_location);
        void start_service();
    private:
        nlohmann::json config;
    };
}