// this will be called anytime it is included in the routes folder as a middleware. It will firstly check weather the user is registered on the system and add them
// check if blocked, and authenticate them based on weather the given data is valid on the mysql database listed in the .settings.conf.js file.

const app = module.exports = require('express')();
const crypto = require('crypto');
const session = require('express-session');
const cron = require("node-cron");
const mysql = require('mysql');
const config = require('./settings.conf');

var sessions = [];


// entry point for all middleware invoked requests
app.all("*", (req, res, next) => {
    // gather data for inspection later
    var data = {
        api_key: req.body.api_key,
        user_id: req.body.user_id,
        ip: req.ip,
        token: req.body.token
    };
    var client = null;

    // check is user has already opened a session and load it to client variable: (client || null)
    for (var i = 0; i < sessions.length; i++) {
        if (sessions[i].ip == data.ip) {
            client = i;
        };
    };

    // this is where all the logic happens 
    init(client, res);

});

function init(client, res) {
    
};

function generateToken(client) {
    var d = new Date();
    return (crypto.createHmac(config.token.token_algorithm, config.token.secret).update(d.getTime + "." + sessions[client].ip + "." + sessions[client].user_id).digest(config.token.digest));
}

async function listKeys(api_key, user_id, callback) {
    var sql = 'SELECT * FROM api_keys WHERE user_id = ' + mysql.escape(user_id) + ' AND api_key = ' + mysql.escape(api_key);
    connection.query(sql, function (err, result) {
        if (err) throw err;
        callback(result)
    });
};

function sendResponse(status, message, res) {
    res.status(status).send({
        message
    });
};

function removeToken(tokens, i) {
    tokens.splice(i, 1);
};
