import React, { Component } from 'react';

class LoginUsername extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleText = this.handleText.bind(this);
      }


      handleText(event) {
        this.setState({value: event.target.value});
        this.props.changeVal(this.state.value);
      }
    
    render(){
        if (this.props.currentStep !== 0) {
            return null;
        };
        
        return (
        <form className="login-form" onSubmit={this.props.handleChange}>
            <div className="text-form">
                <input onChange={this.handleText} value={this.state.value}  className="text-field" type="text" placeholder="USERNAME"/>
                <button className="button-form-submit" type="submit"><a className="go_button"><i class="fa fa-arrow-right"></i></a></button>
            </div>
        </form>
        )
    }
}

export default LoginUsername;