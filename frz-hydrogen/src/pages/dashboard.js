import React, { Component } from 'react';
import Login from '../components/login';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: false
        }
    }
    componentDidMount() {
        if (!this.state.logged_in) {
            console.log("not logged in")
        } else {
            console.log("logged in")
        }
    }

    loginTrue = () => {
        this.setState({logged_in: true});
    }

    render(){
        if (!this.state.logged_in) {
            return(
                <Login change={this.loginTrue} />
            )
        } else {
            return ("hello world");
        }
    }
}

export default Dashboard;
