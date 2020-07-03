//
// Created by pc on 03/07/2020.
//

#ifndef MICROSERVICES_SESSIONMANAGER_HPP
#define MICROSERVICES_SESSIONMANAGER_HPP
#include "../../include/Utils/Utils.hpp"

#include <string>
#include <vector>

class SessionManager {
public:
    SessionManager(int ttl, int token_length);

private:
    void create_session(std::string api_key, std::string user_id, std::string origin_ip);
    struct stSession {
          std::string api_key;
          std::string user_id;
          std::string token;
          std::string origin_ip;
          int ttl;
    };

    std::vector < stSession > sessions;
    int ttl;
    int token_length;
};


#endif //MICROSERVICES_SESSIONMANAGER_HPP
