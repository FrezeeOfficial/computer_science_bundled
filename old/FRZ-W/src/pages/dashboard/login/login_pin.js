import React, { Component } from 'react';

class LoginPin extends Component {
    render(){
        if (this.props.currentStep !== 2) {
            return null;
        };
        
        return (
        <form onSubmit={this.props.handleChange}>
            <div className="text-form">
            <div className="pin"> <input type="text"/> <input type="text"/> <input type="text"/> <input type="text"/> </div>
            <div className="pin"> <input type="text"/> <input type="text"/> <input type="text"/> <input type="text"/> </div>
            
            
            <button className="button-form-submit" type="submit" >FINISH</button>
            </div>
        </form>
        )
    }
}

export default LoginPin;