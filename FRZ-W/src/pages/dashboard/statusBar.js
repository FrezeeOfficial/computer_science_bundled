import React, { Component } from 'react';

class StatusBar extends Component {
    render() {
        return (
            <div className="connectivity-bar">
                <span>{this.props.status}<i className={this.props.status_icon}></i></span>
            </div>
        )
    }
}

export default StatusBar;