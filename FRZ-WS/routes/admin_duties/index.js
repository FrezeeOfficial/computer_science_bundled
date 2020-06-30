const app = module.exports = require('express')();
const config = require('../../config');
const mysql = require('mysql');
var colors = require('colors');

// const connection = mysql.createConnection(config.mysql);
// connection.connect((err) => {
//   if (err);
//   console.log((config.mysql.database + ": mysql connected").magenta);
// });

app.get("/list-slaves", (req, res) => {
    listSlaves(asyncCallback)
    function asyncCallback(data){
        res.send(data)
    }
});

app.all("*", (req, res) => {
    res.status(404).send({status: 404, res: "unknown admin command"})
})

async function listSlaves(callback){
    var sql = 'SELECT * FROM hyperv_slaves';
    connection.query(sql, function (err, result) {
    if (err) throw err;
    callback(result)
    });
}
