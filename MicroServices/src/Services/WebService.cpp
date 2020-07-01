//
// Created by pc on 30/06/2020.
//
#include "../../include/MicroService.tpp"

class WebService : public MicroService {
public:
    // overriding the default constrictor but keeping default convention *
    WebService(st_MicroService config1, MicroService::st_MicroService config) : MicroService(config1) {
        this->config = config;
    };

    void stop_all_sockets(){
        std::cout << "All Sockets Killed" << std::endl;
    }
};