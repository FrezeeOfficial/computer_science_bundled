var Actions = (function(){
    var io = undefined;

    function setIO(IO){
        if (io == undefined) {
            io = IO;
            return (true)
        } else {
            return (false)
        }
    }

    function return_error(socket, error_level, error_message){
        socket.emit("new_message", {level: error_level, error: true, error_message: error_message});
    }

    function return_message(socket, message_level, message_body) {
        socket.emit("new_message", {level: message_level, message_body})
    }

    // TODO: add a backend model fetch
    function login_user(socket, data) {
        if (data.login_uuid == "1234") {
            
        }

    return {
        return_error,
        return_message,
        setIO,
        login_user
    }

}());

module.exports = Actions;