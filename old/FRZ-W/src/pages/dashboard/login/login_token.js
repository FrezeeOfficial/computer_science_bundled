import React, { Component } from 'react';

class LoginToken extends Component {
    render(){
        if (this.props.currentStep !== 1) {
            return null;
        };
        
        return (
            <form onSubmit={this.props.handleChange}>
            <div className="text-form">
                <input className="text-field" type="text" placeholder="TOKEN"/>
            <button className="button-form-submit" type="submit" >NEXT</button>
            </div>
        </form>
        )
    }
}

export default LoginToken;