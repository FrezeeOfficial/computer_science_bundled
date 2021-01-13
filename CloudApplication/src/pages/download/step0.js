import React, { Component } from 'react';

class step0 extends Component {

    tryNow = () => {
        this.props.handleChange();
    }

    render(){
        if (this.props.currentStep !== 0) {
            return null
        }

        return (
        
        <div>
            <div className="home-header">
                <a href="/dashboard">Already Logged In?</a>
            </div>
            <div className="home container">

                <h1>THE MOST POWERFUL ANTIVIRUS YET</h1>
                <h2>a portable and lightweight virus detection and prevention application, for free</h2>
                <span>WINDOWS / IOS / ANDROID</span>
                    <div className="home-demo"> 
                        <div className="home-demo-left"> 
                            <h2>GIVE IT A <span className="test-drive">TEST DRIVE</span></h2>
                            <span>you'll be good to go in minutes with our super easy installation</span>
                            <button onClick={this.tryNow}>TRY NOW</button>
                        </div>
                        <div className="home-demo-right"> 
                            <h2></h2>
                        </div>
                    </div>
            </div>
        </div>
        )
    }    
}

export default step0;