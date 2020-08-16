import React, { Component } from 'react';

class LoginPin extends Component {
    render(){
        if (this.props.currentStep !== 2) {
            return null;
        };
        
        return (
        <form className="login-form" onSubmit={this.props.handleChange}>
            <div className="text-form">
            <div className="pin"> <input type="text"/> <input type="text"/> <input type="text"/> <input type="text"/> </div>            
            
            <button className="button-form-submit" type="submit" ><a className="go_button"><i class="fa fa-arrow-right"></i></a></button>
            </div>
        </form>
        )
    }
}

export default LoginPin;