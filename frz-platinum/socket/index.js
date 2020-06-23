const express = require('express');
var app = express();

var actions = require("./actions");
var routes = require("./routes");
const config = require("./properties.config");
var authenticate = require("./authenticate");

server = app.listen(config.port)
const io = require('socket.io')(server);
actions.setIO(io);

// controller will manage the session, routes will handle a recieved message and action will do the appropriate action
io.on('connection', (socket) => {
    console.log("Socket initiated")
    socket.emit("new_message", {command: "KILL"})
    // middleware
    io.use((socket, next) => {
        let token = socket.handshake.query.token;
        if (authenticate(token)) {
            return next();
        }
        actions.return_error(socket, 5, "unknown user, session will be closed");
        return next(new Error('authentication error'));
    });

    // triggers when server receives a message
    socket.on('new_message', (data) => {
            // sending the message to routes
            routes.new_message(data, socket);
    })
})
