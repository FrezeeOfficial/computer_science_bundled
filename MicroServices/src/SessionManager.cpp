//
// Created by pc on 03/07/2020.
//

#include "../include/SessionManager.hpp"

SessionManager::SessionManager(int ttl, int token_length) {
    this->ttl = ttl;
    this->token_length = token_length;
};

void SessionManager::create_session(std::string api_key, std::string user_id, std::string origin_ip) {
    // makes session template and adds it to active sessions where it will be in the live enviroment
    std::string token = Utils::generate_token(this->token_length);

    SessionManager::stSession t_session;
            t_session.api_key       = api_key;
            t_session.user_id       = user_id;
            t_session.origin_ip     = origin_ip;
            t_session.token         = token;
            t_session.ttl           = this->ttl;

    this->sessions.push_back(t_session);
}

void SessionManager::remove_session(std::string user_id, std::string api_key) {
    for (int i = 0; i < this->sessions.size(); i++ ) {
        if (this->sessions.at(i).user_id == user_id && this->sessions.at(i).api_key == api_key) {
            this->sessions.erase(this->sessions.begin() + i);
            break;
        }
    }
}