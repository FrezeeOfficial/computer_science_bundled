//
// Created by pc on 30/06/2020.
//
#include "../../include/MicroService.tpp"
#include <boost/asio.hpp>
#include "../../include./MicroServiceController.hpp"
#include "../../include/SessionManager.hpp"

class WebService : virtual public MicroService {

public:
    // overriding the default constrictor but keeping default convention *
    WebService(st_MicroService config1, st_MicroService config) : MicroService(config1) {
        this->config = config;
        // this->Sessions = SessionManager(config.rest_data.ttl, config.rest_data.token_length);
    };

    void start_service(){
        std::cout << "WebService Initialising" << std::endl;
        std::cout << this->config.rest_data["ip"] << std::endl;
        // this will initialise the rest and socket methods
        if (this->config.use_rest) {
            // service using rest
//            InterfaceManager::RestManager *RM = new InterfaceManager::RestManager(this->config.rest_data);
//            this->rest = RM;
//            this->rest->start_interface();
        };

        if (this->config.use_socket) {
            // service using socket
            // this->socket = MicroServiceController::SocketManager(this->config.socket_data);
        }
    };

    void stop_all_sockets(){
        std::cout << "All Sockets Killed" << std::endl;
    };

private:
    // SessionManager Sessions;
};