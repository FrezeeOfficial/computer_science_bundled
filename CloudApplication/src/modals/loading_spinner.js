import React, { Component } from 'react';
import './loading_spinner.css';

class LoadingSpinner extends Component {  
    render (){
            if (!this.props.active) {
                return (
                        null
                )
            }
            return (
                <div className="loader-body">
                    <div class="loader"></div>
                    <span>{this.props.children}</span>
                </div>
            )
        }
}

export default LoadingSpinner;