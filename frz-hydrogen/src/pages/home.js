import React, { Component } from 'react';
import './home.css';

import Step0 from './download/step0';
import Step1 from './download/step1';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
          currentStep: 0
        }

        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event) {
        this.setState({
          currentStep: (this.state.currentStep + 1)
        })    
      }


    render(){
        return (
            <React.Fragment>
                <Step0 currentStep={this.state.currentStep} handleChange={this.handleChange}/>
                <Step1 currentStep={this.state.currentStep} handleChange={this.handleChange}/>
            </React.Fragment>
        )
    }    
}

export default Home;