const express = require('express');
var app = express();

var actions = require("./actions");
var routes = require("./routes");
const config = require("./properties.config");

server = app.listen(config.port)
const io = require('socket.io')(server);
actions.setIO(io);
// controller will manage the session, routes will handle a recieved message and action will do the appropriate action
io.on('connection', (socket) => {
    console.log("Socket initiated")

    // notation for sending a message
    socket.emit('new_message', 
        {
            command: "ACCEPTED",
            app_data: {app_id: "93&jsd6%0Akjkda"}
        }
    )


    // triggers when server receives a message
    socket.on('new_message', (data) => {
        // sending the message to routes
        routes.new_message(data, socket);
    })
})
