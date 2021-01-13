import React, { Component } from 'react';

class Threats extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        if (!this.props.active){
            return(
                null
            );
        }

        return(
            <div className="content">
                <h2 className="main-title">Threats</h2>
                <h3 className="main-title-small">Manage threats and device safety</h3>

            </div>
        )
    }

}

export default Threats;