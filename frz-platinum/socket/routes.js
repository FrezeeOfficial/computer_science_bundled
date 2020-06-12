const Actions = require("./actions");
const actions = require("./actions");

var Routes = (function() {
    _private: {
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
                break;

            default: 
                actions.return_error(socket, 4, "unknown command level")
                break;
        }
    }

    return {
        new_message
    }

}());

module.exports = Routes;