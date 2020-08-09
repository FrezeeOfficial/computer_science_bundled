//
// Created by James on 04/07/2020.
//

#ifndef MICROSERVICES_REST_HPP
#define MICROSERVICES_REST_HPP
#include "../../lib/json.hpp"

#include <boost/beast/core.hpp>
#include <boost/beast/http.hpp>
#include <boost/beast/version.hpp>
#include <boost/asio.hpp>
#include <chrono>
#include <cstdlib>
#include <ctime>
#include <iostream>
#include <memory>
#include <string>


namespace Interfaces {
    class Rest {
       public:
        Rest(){

        }

        void start_service();

        private:
        nlohmann::json config;
    };
}


#endif //MICROSERVICES_REST_HPP
