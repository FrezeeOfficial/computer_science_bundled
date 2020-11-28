import React, { Component } from 'react';

class StatusBar extends Component {
    render() {
        return (
            <div className="connectivity-bar">
                <span>{this.props.status}<i className={"status_icon" + " " + this.props.status_colour}></i></span>
            </div>
        )
    }
}

export default StatusBar;