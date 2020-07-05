//
// Created by pc on 30/06/2020.
//
#include "../../include/MicroService.tpp"
#include <boost/asio.hpp>
#include "../../include/SessionManager.hpp"

class WebService : virtual public MicroService {

public:
    // overriding the default constrictor but keeping default convention *
    WebService(st_MicroService config1, st_MicroService config) : MicroService(config1) {
        this->config = config;
        if (this->config.use_rest) {
            Interfaces::Rest *R = new Interfaces::Rest(this->config.rest_data);
            this->rest_service = R;
        };
    };

    void start_service(){
        std::cout << "WebService Initialising" << std::endl;

        // this will initialise the rest and socket methods
        if (this->config.use_rest) {
            // service using rest
            this->rest_service->start_service();
        };
    };



    void stop_all_sockets(){
        std::cout << "All Sockets Killed" << std::endl;
    };

private:
};