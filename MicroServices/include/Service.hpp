//
// Created by pc on 30/06/2020.
//

#ifndef MICROSERVICES_SERVICE_HPP
#define MICROSERVICES_SERVICE_HPP
#include <vector>
#include "./MicroService.tpp"
#include "./Interconnect.hpp"
#include "./Utils/Utils.hpp"
#include "../lib/json.hpp"

class Service {
public:
    Service(std::string config_file_name);
    void load_config();
    void add_microservice(MicroService *microservice);
    std::vector <MicroService> list_microservices(){ return this->microservices; };
    std::vector <Interconnect> list_interconnects(){ return this->interconnects; };
private:
    json config_data;
    std::vector <MicroService> microservices;
    std::vector <Interconnect> interconnects;
};


#endif //MICROSERVICES_SERVICE_HPP
