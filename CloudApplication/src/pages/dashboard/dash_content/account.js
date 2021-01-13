import React, {Component} from 'react';

class Account extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        if (!this.props.active){
            return (
                null
            )
        }

        return (
            <div className="content">


                <h2 className="main-title">Your Account</h2>
                <h3 className="main-title-small">Here you can edit and manage your personal information</h3>

            </div>
        )
    }
}

export default Account;