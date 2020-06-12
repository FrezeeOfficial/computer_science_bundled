process.env.NODE_ENV = 'production';

var colors = require('colors');
const express = require('express');
const bodyParser = require('body-parser');
const config = require("./config");
var app = express();
const routes = require("./routes");

const req_logger = require("./middlewares/req_logger");
const session_manager = require("./middlewares/session_manager");

server = app.listen(5000)
const io = require('socket.io')(server);
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
        
    })
})

if (!config.production){
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });


}

app.use(req_logger);

// routes
app.use(routes);

app.listen(process.env.PORT || config.port, config.host, () => {
    console.info(`Platinum API Binded: ${config.host}:${config.port}`.rainbow);
});