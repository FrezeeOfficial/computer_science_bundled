import React, {Component} from 'react';

class Advanced extends Component {
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


                <h2 className="main-title">Advanced Settings</h2>
                <h3 className="main-title-small">Here you can lock, remove or add new devices manually</h3>

            </div>
        )
    }
}

export default Advanced;