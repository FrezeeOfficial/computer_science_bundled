//
// Created by James on 04/07/2020.
//

#ifndef MICROSERVICES_REST_HPP
#define MICROSERVICES_REST_HPP
#include "../../lib/json.hpp"
#include <string>
#include <iostream>
#include <memory>
#include <boost/asio.hpp>
#include <vector>
#include <array>

namespace Interfaces {
    using namespace boost::asio;
    using namespace boost::asio::ip;

    class Rest {

       public:
       Rest(nlohmann::json rest_config);
       void start_service();

       private:
       nlohmann::json config;
    };
}


#endif //MICROSERVICES_REST_HPP
