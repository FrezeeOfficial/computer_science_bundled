import React, { Component } from 'react'
import "./dashboard.css";
import Socket from './socket';

// all actual components which will display data
import ErrorPage from './errorPage'
import DashboardPage from './dashboardPage';
import SplashPage from './splashPage';
import StatusBar from './statusBar';
import LoginPage from './login';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            status: "Not Connected",
            status_colour: "red",
            userExist: false,
            error: {
                error: false,
                error_code: null,
                error_point: null
            },
            socket: {
                error: false,
                error_code: null,
                error_point: null
            },
            device: {
                connected: false,
                error: true,
                readable_error: "NOT CONNECTED TO DEVICE",
                app: {
                    threat: false,
                }
            },
            app_data: {
                card1: {
                    header: "CHECK A CERTAIN FILE",
                    Textcolor: "neon-blue",
                    body: "OUR SERVER WILL RUN ANY SUPPORTED FILE BELIEVED A THREAT AND SEND THE RESULTS BACK TO YOU"
                }
            }
        }
    }

    socketError = (error, error_code, error_point) => {
        this.setState({socket: {error: error, error_code: error_code, error_point}, device: {readable_error: "ENDPOINT REVOKED"}});
        this.setState({error: {error: error, error_code: error_code, error_point}});
    }
    socketAccepted = (val) => {
        // established connection with the socket server
        this.setState({status: "Connected", status_colour: "green"})
        this.setState({isLoaded: true});
        this.setState({device: {connected: true, error: false, readable_error: "CONNECTED TO DEVICE"}})
    }
    socketRejected = () => {

    }

    login_complete(event){
        console.log(event);
        console.log("yey")
    }

    componentDidMount(){
        // this is the function which self invokes. It's where all calls will originate from

        // check if user hos used this computer before
        var app_data = localStorage.getItem("app_data");
        if (app_data != null) {
            this.setState({userExist: true})
        }

        // fixme: this is just here for design purposes
        //this.socketAccepted("e")
    }
 
    render(){
        if (this.state.error.error) {
            // displays the error
            return (<div> <ErrorPage error_code={this.state.error.error_code} error_point={this.state.error_point}/> <StatusBar/> </div>)
        } else if (this.state.isLoaded) {
            // displays the dashboard
            return (<div className="main-content-height-max"><DashboardPage app_data={this.state} /> <StatusBar status_colour={this.state.status_colour} status={this.state.status} /> </div>)
        } else if (!this.state.userExist){
            // display the new user signup form
            return (<LoginPage completed={this.login_complete} />)
        } else {
            // will display splash screen
            return (<div> <Socket socket_data={localStorage.getItem("app_data")} socket_error={this.socketError} socket_accepted={this.socketAccepted} socket_rejected={this.socketRejected}/> <SplashPage/> <StatusBar/> </div>)
        }
    }
}


export default Dashboard