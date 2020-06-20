import React, { useState, useEffect, Component } from "react";
import socketIOClient from "socket.io-client";
import { render } from "@testing-library/react";
const ENDPOINT = "http://localhost:5000";

const Socket = (props) => {

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
            login_uuid: "kksdf3'asdfsa['dsaf;*272"
        });
        
        socket.on('new_message', (data) => {
            console.log(data)
            if (data.command == "KILL") {
                invokeError(true, "0x02", "C6100")
            } else if (data.command == "ACCEPTED") {
                socketAccepted(true);
            }
        })

        socket.on('connect_error', function() {
            invokeError(true, "0x01", "C6100M1")
        })

    }, );

    return (null);  
}

export default Socket;