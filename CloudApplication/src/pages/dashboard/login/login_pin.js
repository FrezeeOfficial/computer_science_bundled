import React, { Component } from 'react';

class LoginPin extends Component {
    constructor(props){
        super(props);
        this.state = {
            current_pin: 2
        }
    }

    nextPin = () => {
        if (this.state.current_pin != 5 ){
            this.setState({current_pin: (this.state.current_pin+1)});
            document.getElementById("pin" + this.state.current_pin).focus();
        } else {
            this.props.handleChange();
        }
    }

    render(){
        if (this.props.currentStep !== 2) {
            return null;
        };

        return (
        <form className="login-form" onSubmit={this.props.handleChange}>
            <div className="text-form">
            <div className="pin"> <input autoFocus  id="pin1" onChange={this.nextPin} placeholder="0" type="text"/> <input onChange={this.nextPin} id="pin2" type="text"/> <input onChange={this.nextPin}id="pin3" type="text"/> <input onChange={this.nextPin} id="pin4" type="text"/> </div>            
            
            <button className="button-form-submit" type="submit" ><a className="go_button"><i class="fa fa-arrow-right"></i></a></button>
            </div>
        </form>
        )
    }
}

export default LoginPin;