import React, { useState, useEffect, Component } from "react";
import socketIOClient from "socket.io-client";
import { render } from "@testing-library/react";
const ENDPOINT = "http://localhost:5000";

const Socket = (props) => {

    var app_data = JSON.parse(props.socket_data);
    const [response, setResponse] = useState("");
    
    function invokeError(error, error_code, error_point){
        props.socket_error(error, error_code, error_point)
    }
    function socketAccepted(val){
        props.socket_accepted(val);
    }

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);

        socket.emit('new_message', {
            level: 5,
            command: "login",
            login_type: "uuid",
            login_uuid: app_data.uuid,
            app_data: props.socket_data
        });
        
        socket.on('new_message', (data) => {
            console.log(data);
            if (data.error) {
                // we have an error
                switch(data.error_case){
                    case("login"):
                        invokeError(true, "0x02", "login revoked");
                        break;
                    default:
                        invokeError(true, "0x00", "unknown error");
                        break;
                }
            } else {
                // continues to the next part
                switch(data.message_body.command){
                    case("login"):
                            socketAccepted("s");
                        break;
                    default:
                        invokeError(true, "0x00", "unknown error");
                        break;
                }
            }
        })

        socket.on('connect_error', function() {
            invokeError(true, "0x01", "C6100M1")
        })

    }, );

    return (null);  
}

export default Socket;