import React, { useState, useEffect, Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
const ENDPOINT = "ws://localhost:5000/cloud_app";

const Socket = (props) => {

    var app_data = JSON.parse(props.socket_data);
    const [response, setResponse] = useState("");
    
    function invokeError(error, error_code, error_point){
        props.socket_error(error, error_code, error_point)
    }
    function socketAccepted(val){
        props.socket_accepted(val);
    }

    const client = new W3CWebSocket(ENDPOINT);

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected');

            client.send(JSON.stringify({
                token: JSON.parse(props.socket_data).uuid
            }))
        };
        client.onmessage = (message) => {
            console.log(message);
        };

    }, );

    return (null);  
}

export default Socket;