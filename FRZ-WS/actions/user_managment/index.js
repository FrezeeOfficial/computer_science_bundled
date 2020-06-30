const config = require('../../config')
const mysql = require('mysql');

// const connection = mysql.createConnection(config.mysql);
// connection.connect((err) => {
//   if (err);
//   console.log((config.mysql.database + ": mysql connected").magenta);
// });

module.exports = (function UserManagment () {
    async function doesAppExist(app_name, app_size, callback){
        var sql = 'SELECT * FROM Apps WHERE app_name = ' + mysql.escape(app_name);
        connection.query(sql, function (err, result) {
        callback(result)
        });
    }


    return {
        doesAppExist: function(app_name, app_size, callback){
            return (doesAppExist(app_name, app_size, callback));
        }

        
    }
}());