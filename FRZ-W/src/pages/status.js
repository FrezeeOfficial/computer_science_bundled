import React, { Component } from "react";
import './status.css';
var update = require('react-addons-update');

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: {
                status: "Generated: ",
                icon: "white fa fa-times",
                colour: "m-b card-yellow"
            },
            servers: [
            {name: "Platinum: API", status: "Operational", colour: "green"},
            {name: "Hydrogen: Web", status: "Operational", colour: "green"},
            {name: "Titanium: Desktop", status: "Potential Vulnerability", colour: "yellow"},
            ]
        }
    };

    componentDidMount(){
        // fetch data here
        
        
    }

    ping(ip, callback) {

        if(!this.inUse) {
      
          this.inUse = true;
          this.callback = callback
          this.ip = ip;
      
          var _that = this;
      
          this.img = new Image();
      
          this.img.onload = function() {_that.good();};
          this.img.onerror = function() {_that.good();};
      
          this.start = new Date().getTime();
          this.img.src = "http://" + ip;
          this.timer = setTimeout(function() { _that.bad();}, 1500);
      
        }
      }

    render() {
        var rows = [];
        for (var i= 0; i < this.state.servers.length; i++) {
            rows.push(<Card server={this.state.servers[i].name} status={this.state.servers[i].status} colour={this.state.servers[i].colour}/>);
        }

        return(
            <div className="status-container">
                <div className="status-cards-container">
                <div className={"status-card " + this.state.header.colour}>
                        <a className="status-card-left"><i className={this.state.header.icon}> </i> {this.state.header.status || "Connection Failed"}</a>
                        <a className="status-card-right"></a>
                    </div>

                    {rows}

                </div>
            </div>
        )
    }
}

class Card extends Component {
    render(){
        return(
            <div className="status-card">
            <a className="status-card-left">{this.props.server}</a>
            <a className={"status-card-right " + this.props.colour}>{this.props.status || "Failed"}</a>
            </div>
        )
    }
}
export default Status;