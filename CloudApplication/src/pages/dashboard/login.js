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
                <div className="login-form-container">
                    <LoginUsername currentStep={this.state.currentStep} handleChange={this.handleChange} />
                    <LoginToken currentStep={this.state.currentStep} handleChange={this.handleChange} />
                    <LoginPin currentStep={this.state.currentStep} handleChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

export default Login;