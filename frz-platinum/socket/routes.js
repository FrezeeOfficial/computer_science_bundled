const Actions = require("./actions");
var jwtDecode = require('jwt-decode');

var Routes = (function() {
    _private: {
    }

    function handleL5(socket, data){
        if (data.command == "login") {
            var decoded_token = jwtDecode(JSON.parse(data.app_data).session);
            if (decoded_token.token == "11111-11111-11111-11111-11111") {
                Actions.login_user(socket, data);
            } else {
                Actions.return_error(socket, 5, "failed session data")
            }
        }
    }


    function new_message(data, socket){
        switch(data.level){
            case (1):
                break;
            case (2):
                break;
            case (3):
                break;
            case (4):
                break;
            case (5):
                handleL5(socket, data);
                break;

            default: 
                Actions.return_error(socket, 4, "unknown command level")
                break;
        }
    }

    return {
        new_message
    }

}());

module.exports = Routes;