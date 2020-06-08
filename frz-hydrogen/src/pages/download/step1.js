import React, { Component } from 'react';

class step1 extends Component {

    render(){
        if (this.props.currentStep !== 1) {
            return null
        }
         
        return (
            <div className="home container">
                <h1>WHAT TYPE OF <span className="test-drive">ANTIVIRUS</span> DO YOU WANT?</h1>
                <h2>don't worry their all free and we will never ask for your bank details</h2>
                <div className="home-plans">
                    <div className="plan plan1">
                    </div>
                    <div className="plan plan2">
                        <h2>SOFTWARE</h2>
                        <h3>ESTIMATED INSTALLATION: 82s</h3>
                        <h4>our securest option completely free ultra fast installation real-time protection</h4>

                        <button>NEXT</button>
                    </div>
                    <div className="plan plan3">
                    </div>
                </div>
            </div>
        )
    }    
}

export default step1;