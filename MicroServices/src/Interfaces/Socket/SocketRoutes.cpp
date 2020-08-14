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

    server m_sserver = m_server;

    for (auto it : m_connections) {
        if (jsonMsg["command"] == "push_token") {
            // pretends that the user name is ok
            m_sserver.send(it, "{success: true}", websocketpp::frame::opcode::text);
        } else if (jsonMsg["command"] == "push_pin") {
            // pretends that the token supplied is good
            m_sserver.send(it, "{success: true}", websocketpp::frame::opcode::text);
        } else if (jsonMsg["command"] == "fetch_uuid") {
            // pretends that the token supplied is good
            if (jsonMsg["token"] == token && jsonMsg["pin"] == pin) {
                m_sserver.send(it, "{uuid: " + uuid + "}", websocketpp::frame::opcode::text);
            } else {
                m_sserver.send(it, "{success: false}", websocketpp::frame::opcode::text);
            }
        }
    }
}