#include <iostream>
#include "../include/Service.hpp"

int main() {

    // initialise main service
    Service *Server = new Service("config.json");
    std::cout << Server->list_microservices().at(0).get_service_name() << std::endl;

    return 0;
};