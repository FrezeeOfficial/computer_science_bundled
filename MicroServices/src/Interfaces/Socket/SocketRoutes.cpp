//
// Created by James on 10/08/2020.
//

#include "../../../include/Interfaces/Socket.hpp"
#include "iostream"

// level 6 route - all login querys and signups
void Interfaces::Socket::Routes::lvl6(connection_hdl hdl, nlohmann::json jsonMsg, std::string command) {
    // the data right here will be generated but here for testing purposes
    std::string token = "2913-0192-8172-9281-6571";
    std::string pin = "2910";
    std::string uuid = "11111-11111-11111-11111-11111";

    std::cout << "Command level 6 requested" << std::endl;

}

/*
 * 1.0.0 does user have the uuid in its header?
 *      1.1 no?
 *          1.1.1? does have special auth header?
 *              1.1.2 no? reject the connection
 *
 *      1.2 yes? ok all good
 */