import React, { Component } from "react";
import './login.css';

import LoginUsername from "./login/login_username";
import LoginToken from "./login/login_token";
import LoginPin from "./login/login_pin";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.completed,
            currentStep: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      this.setState({
        currentStep: (this.state.currentStep + 1)
      })    
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.state.completed(event);
    }

    componentDidMount() {

    }

    render(){
        return (
            <div className="login-body">
                <div className="login-body-left">
                    <h1>Your new here?</h1>

                    <h2>WHAT IS THIS?</h2>
                    <span>This is the extended web app for your antivirus software. It allows for even better control with a cleaner and more elegant design. Think of this as your antivirus control center.</span>

                    <h2>GETTING STARTED</h2>
                    <span>Easy, follow the intuitive guide on the right next to this. To get your control token, you'll need to open your software Settings - Manage TokensWe promise, you'll only have to do this once. And the web app may only be</span>
                </div>
                <div className="login-body-right">
                    <LoginUsername currentStep={this.state.currentStep} handleChange={this.handleChange} />
                    <LoginToken currentStep={this.state.currentStep} handleChange={this.handleChange} />
                    <LoginPin currentStep={this.state.currentStep} handleChange={this.handleChange} />
        
                </div>
            </div>
        );
    }
}

export default Login;