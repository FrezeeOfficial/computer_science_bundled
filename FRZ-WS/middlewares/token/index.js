const app = module.exports = require('express')();
const crypto = require('crypto');
var session = require('express-session');
const cron = require("node-cron");
const config = require("./config");
const base64url = require('base64url');

// static data
const secretKey = config.token_secret;
const header = config.header;
const encodedHeader = base64url(JSON.stringify(header));

module.exports = (function() {
    function sendPayload(res, _payload) {   
        const payload = _payload;
        const encodedPayload = base64url(JSON.stringify(payload));
    
        const signature = crypto.createHmac('sha512', secretKey).update(encodedHeader + '.' + encodedPayload).digest('base64')
        const jwt = `${encodedHeader}.${encodedPayload}.${signature}`;
    
        res.send(jwt);
    }
    

    return {
        sendPayload
    }
}());