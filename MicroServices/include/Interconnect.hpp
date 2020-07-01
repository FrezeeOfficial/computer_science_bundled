//
// Created by pc on 01/07/2020.
//

#ifndef MICROSERVICES_INTERCONNECT_HPP
#define MICROSERVICES_INTERCONNECT_HPP

#endif //MICROSERVICES_INTERCONNECT_HPP

#include "./MicroService.tpp"

class Interconnect {
public:
    Interconnect( MicroService *microService );

    MicroService *microservice;
};