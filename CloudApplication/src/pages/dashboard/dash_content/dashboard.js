import React, { Component } from 'react';

class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scan: {
                percentage: 1
            }
        }
    }

    render(){
        if (!this.props.active){
            return(
                null
            )
        }
        return (

            <div className="content">


                <h2 className="main-title">Your Device is in Danger</h2>
                <h3 className="main-title-small">a previous app scan revealed virus.exe is a virus</h3>

                <div className="card-fullsize card-push-low">
                    <div className="card-left">
                        <span className="card-header">{this.props.app_data.app_data.card1.header}<span className={ "text-color-" + this.props.app_data.app_data.card1.Textcolor} > - RECOMMENDED</span></span>
                        <span className="card-body">{this.props.app_data.app_data.card1.body}</span>
                    </div>
                    <div className="card-right">
                        <button>START</button>
                        <span>OTHER OPTIONS</span>
                    </div>
                </div>

                <div className="card-23 card-push-low">
                    <div id="live-scan">
                        <span className="card-title-center">Scan System</span>
                        <div className="circle-scan-outer">
                            <div className="circle-scan-iouter">
                                <div className="circle-scan-inner">
                                    <a className="circle-scan-inner-text">{this.state.scan.scan_percentage}<i>%</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-13 card-push-low">
                    <span className="card-title-center">History</span>
                </div>
            </div>
        )
    }
}

export default dashboard;