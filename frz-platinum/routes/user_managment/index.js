const app = module.exports = require('express')();
var { doesAppExist } = require('../../actions').user_managment;
var multer = require('multer');
var upload = multer();
var upload = multer({ dest: './' })

app.all('*', upload.any(), function (req, res, next) {
    switch(req.query.query){ 

        // checks virus name and sees if it is in the database
        case 'doesAppExist':
            doesAppExist(req.body.app_name, req.body.app_size, callback);

            // because function is async we need a callback
            function callback(result){
                res.status(200).send({
                    status: 200,
                    sql_response: result
                })
            }
        break;

        // upload file and check if it has a virus (hyper-v)
        case 'scanFile':

        break;

        // requests for a socket so remote machine access and other functions not supported by REST api
        case 'requestSocket':
        
        break;

        default:
            res.status("404").send({
                status: 404,
                response: "unknown command"
            })
        break;
    }
});