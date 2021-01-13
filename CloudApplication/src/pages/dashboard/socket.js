import React, { useState, useEffect, Component } from "react";
import { render } from "@testing-library/react";
const WebSocket = require('ws');
const ENDPOINT = "http://localhost:5000/cloud_app";

const Socket = (props) => {
    console.log("sdf");


    var app_data = JSON.parse(props.socket_data);
    const [response, setResponse] = useState("");
    
    function invokeError(error, error_code, error_point, readable_error){
        props.socket_error(error, error_code, error_point, readable_error)
    }
    function socketAccepted(val){
        props.socket_accepted(val);
    }

    //const ws = new WebSocket(ENDPOINT);

    useEffect(() => {
        
        //FIXME: this is a temp for ui testing
        setTimeout(() => {
            socketAccepted("e");
            // invokeError(true, "fX91", "Local", "Connection To The Server Failed. Please Try Again Later");
        }, 5);


    },);

    return (null);  
}

export default Socket;