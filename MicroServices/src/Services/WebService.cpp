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

    void start_service(){
        std::cout << "WebService Initialising" << std::endl;

        // this will initialise the rest and socket methods
        if (this->config.use_rest) {
            // service using rest
            InterfaceManager::RestManager *RM = new InterfaceManager::RestManager(this->config.rest_data);
            this->rest = RM;
            this->rest->start_interface();
        };

        if (this->config.use_socket) {
            // service using socket
            // this->socket = InterfaceManager::SocketManager(this->config.socket_data);
        }
    };

    void stop_all_sockets(){
        std::cout << "All Sockets Killed" << std::endl;
    };
};