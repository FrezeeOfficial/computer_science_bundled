import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {UUID: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({UUID: event.target.value});
    }

    handleSubmit(event){
        console.log(event.target.value);
        event.preventDefault();
    }

    componentDidMount() {

    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    UUID TOKEN:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Login;