const app = module.exports = require('express')();
const user_managment = require("./user_managment");
const session_manager = require('../middlewares/session_manager');
const admin_duties = require('./admin_duties');

// use routes for user managment microservice, which will uss the session manager middleware
app.use('/user-management', session_manager, user_managment);
app.use('/admin-duties', admin_duties);

// catch all unknowns
app.all("*", (req, res) => {
    res.status(404).send({
        error_code: 404,
        message: "Unknown Service"
    })
});