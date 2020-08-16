import React, { Component } from 'react';

class LoginUsername extends Component {
    render(){
        if (this.props.currentStep !== 0) {
            return null;
        };
        
        return (
            <form className="login-form" onSubmit={this.props.handleChange}>
            <div className="text-form">
                <input className="text-field" type="text" placeholder="USERNAME"/>
                <button className="button-form-submit" type="submit" ><a className="go_button"><i class="fa fa-arrow-right"></i></a></button>
            </div>
        </form>
        )
    }
}

export default LoginUsername;