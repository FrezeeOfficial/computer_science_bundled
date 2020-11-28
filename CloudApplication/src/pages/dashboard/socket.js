import React, { useState, useEffect, Component } from "react";
import { render } from "@testing-library/react";
const WebSocket = require('ws');
const ENDPOINT = "http://localhost:5000/cloud_app";

const Socket = (props) => {

    var app_data = JSON.parse(props.socket_data);
    const [response, setResponse] = useState("");
    
    function invokeError(error, error_code, error_point){
        props.socket_error(error, error_code, error_point)
    }
    function socketAccepted(val){
        props.socket_accepted(val);
    }

    //const ws = new WebSocket(ENDPOINT);

    useEffect(() => {
        
 

    }, );

    return (null);  
}

export default Socket;