import React, { Component } from "react";
import './login.css';

import LoadingSpinner from '../../modals/loading_spinner';

import LoginUsername from "./login/login_username";
import LoginToken from "./login/login_token";
import LoginPin from "./login/login_pin";
import { faAssistiveListeningSystems } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            login_completed: false,
            currentStep: 0,
            username: null,
            token: null,
            pin: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log("sdf")
      this.setState({
        currentStep: (this.state.currentStep + 1)
      })    


      switch(this.state.currentStep) {
        case 0:
            // push token with the username
            console.log("d") 
        break;

            case 2:
            // form completed, show loader and check pin and fetch uuid
            // load spinning modal
            this.setState({completed: true});

            // this here is temp.
            setTimeout(() => {
                var data = {"uuid": "11111-11111-11111-11111"};
                localStorage.setItem('app_data', JSON.stringify(data));

                // refresh page / completed
                this.props.login_complete();
            }, 5000);

                break;

    }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.state.completed(event);

    }

    change_username(value){

        this.setState({username: value});
    }
    change_token(value){

        this.setState({token: value});
    }
    change_pin(value){

        this.setState({pin: value});
    }

    componentDidMount() {

    }

    render(){
        return (
            <div className="login-body">
                <LoadingSpinner active={this.state.completed}> We're setting up your account </LoadingSpinner>
                <div className="login-form-container">
                    <LoginUsername changeVal={this.change_username.bind(this)} currentStep={this.state.currentStep} handleChange={this.handleChange} />
                    <LoginToken changeVal={this.change_token.bind(this)} currentStep={this.state.currentStep} handleChange={this.handleChange} />
                    <LoginPin changeVal={this.change_pin.bind(this)} currentStep={this.state.currentStep} handleChange={this.handleChange} />      
                </div>
            </div>
        );
    }
}

export default Login;