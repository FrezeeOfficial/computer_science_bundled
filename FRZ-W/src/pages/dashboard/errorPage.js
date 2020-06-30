import React, { Component } from 'react';

class ErrorPage extends Component {
    render(){
        return (
                <div className="error-modal">
                <div className="error-modal-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 98 98">
                      <g id="Group_11" data-name="Group 11" transform="translate(-863 -323)">
                      <circle id="Ellipse_2" data-name="Ellipse 2" cx="49" cy="49" r="49" transform="translate(863 323)" fill="#f1f2f3"/>
                      <line id="Line_32" data-name="Line 32" x2="45" y2="45" transform="translate(890.5 350.5)" fill="none" stroke="#e12c2c" stroke-width="2"/>
                      <line id="Line_33" data-name="Line 33" y1="45" x2="45" transform="translate(890.5 350.5)" fill="none" stroke="#e12c2c" stroke-width="2"/>
                      </g>
                  </svg>

                    <span className="oops-error">Whoops</span>
                    <span>You device failed to establish a socket request with {this.props.error_point || "unknown"}</span>
                        <br></br>
                    <span className="small-text">Error Code: {this.props.error_code || "Unknown"}</span>
                    <span className="small-text">Failure Point: {this.props.error_point || "Unknown"}</span>
                </div>
            </div>
        )
    }
}

export default ErrorPage;