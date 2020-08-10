import React, { Component } from 'react';

class LoginUsername extends Component {
    render(){
        if (this.props.currentStep !== 0) {
            return null;
        };
        
        return (
            <form onSubmit={this.props.handleChange}>
            <div className="text-form">
                <input className="text-field" type="text" placeholder="USERNAME"/>
            <button className="button-form-submit" type="submit" >NEXT</button>
            </div>
        </form>
        )
    }
}

export default LoginUsername;