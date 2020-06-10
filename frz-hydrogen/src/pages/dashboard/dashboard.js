import React, { Component } from 'react'
import "./dashboard.css";
import Socket from './socket';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            socket: {
                error: false,
                error_code: null,
                error_point: null
            },
            device: {
                connected: false,
                error: true,
                readable_error: "NOT CONNECTED TO DEVICE"
            }
        }
    }

    socketError = (error, error_code, error_point) => {
        this.setState({socket: {error: error, error_code: error_code, error_point}});
    }
    socketAccepted = (val) => {
        // established connection with the socket server
        this.setState({isLoaded: true});
        this.setState({device: {connected: true, error: false, readable_error: "CONNECTED TO DEVICE"}})
    }

    componentDidMount(){
    }

    render(){
        if (this.state.socket.error){
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
            <span>You device failed to establish a socket request with {this.state.socket.error_point || "unknown"}</span>
<br></br>
                    <span className="small-text">Error Code: {this.state.socket.error_code || "Unknown"}</span>
                    <span className="small-text">Failure Point: {this.state.socket.error_point || "Unknown"}</span>
                </div>
            </div>
            )
        }
        if (!this.state.isLoaded){
            return (
                <React.Fragment>
                <Socket socketAccepted={this.socketAccepted} socketFault={this.socketError}></Socket>
                <span>{this.state.socket.error_message}</span>
                <svg className="svgLoader" xmlns="http://www.w3.org/2000/svg" width="346" height="299" viewBox="0 0 346 299">

                <path className="svgLoaderPath" d="M163.479,16.456a11,11,0,0,1,19.042,0L336.448,282.491A11,11,0,0,1,326.927,299H19.073a11,11,0,0,1-9.521-16.509Z" fill="rgba(255, 44, 44, 0.2)"/>
                    
                </svg>
                <div className="connectivity-bar">
                    <span>{this.state.device.readable_error}<i>I</i></span>
                </div>
                </React.Fragment>

            )
        }
        if (this.state.isLoaded) {
            return (
                <React.Fragment>
                    <div className="sidebar">
                        <div className="pc-status">
                            

                        <svg xmlns="http://www.w3.org/2000/svg"  width="325" height="325" viewBox="0 0 325 325">
                        <defs>
                            <filter id="Ellipse_1" x="0" y="0" width="325" height="325" filterUnits="userSpaceOnUse">
                            <feOffset input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="28" result="blur"/>
                            <feFlood flood-color="#fff"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                            </filter>
                            <filter id="Polygon_1" x="103" y="98.5" width="120" height="109" filterUnits="userSpaceOnUse">
                            <feOffset input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="6.5" result="blur-2"/>
                            <feFlood flood-color="#f57c00" flood-opacity="0.471"/>
                            <feComposite operator="in" in2="blur-2"/>
                            <feComposite in="SourceGraphic"/>
                            </filter>
                        </defs>
                        <g id="Group_20" data-name="Group 20" transform="translate(11 -8)">
                            <g transform="matrix(1, 0, 0, 1, -11, 8)" filter="url(#Ellipse_1)">
                            <circle id="Ellipse_1-2" data-name="Ellipse 1" cx="78.5" cy="78.5" r="78.5" transform="translate(84 84)" fill="#fff"/>
                            </g>
                            <g transform="matrix(1, 0, 0, 1, -11, 8)" filter="url(#Polygon_1)">
                            <g id="Polygon_1-2" data-name="Polygon 1" transform="translate(122.5 118)" fill="#f57c00" opacity="0.75">
                                <path d="M 61.92729187011719 69.50000762939453 L 19.07271003723145 69.50000762939453 C 15.27476024627686 69.50000762939453 11.87450981140137 67.53583526611328 9.977049827575684 64.24584197998047 C 8.079580307006836 60.95585632324219 8.082269668579102 57.0290641784668 9.984250068664551 53.74168395996094 L 31.41153907775879 16.70686531066895 C 33.31050872802734 13.42468547821045 36.70806884765625 11.46518516540527 40.5 11.46518516540527 C 44.29193115234375 11.46518516540527 47.68949127197266 13.42468547821045 49.58845901489258 16.70686531066895 L 71.0157470703125 53.74168395996094 C 72.91773223876953 57.0290641784668 72.92043304443359 60.95585632324219 71.02295684814453 64.24584197998047 C 69.12548828125 67.53583526611328 65.72524261474609 69.50000762939453 61.92729187011719 69.50000762939453 Z" stroke="none"/>
                                <path d="M 40.5 11.96517181396484 C 36.88862991333008 11.96517181396484 33.65287017822266 13.83137512207031 31.84432983398438 16.95725631713867 L 10.41703796386719 53.99207305908203 C 8.605621337890625 57.12291717529297 8.603057861328125 60.86271667480469 10.41017150878906 63.99603652954102 C 12.21727752685547 67.12935638427734 15.45561981201172 68.99999237060547 19.07270812988281 68.99999237060547 L 61.92729187011719 68.99999237060547 C 65.54438018798828 68.99999237060547 68.78270721435547 67.12935638427734 70.58982849121094 63.99603652954102 C 72.39694213867188 60.86271667480469 72.39437866210938 57.12290573120117 70.58296203613281 53.9920654296875 L 49.15567016601563 16.95724487304688 C 47.34712982177734 13.83137512207031 44.11135864257813 11.96517181396484 40.5 11.96517181396484 M 40.50000381469727 10.96517181396484 C 44.20159149169922 10.96517181396484 47.90317535400391 12.79560089111328 50.021240234375 16.45645523071289 L 71.44853210449219 53.49127578735352 C 75.69138336181641 60.82460784912109 70.39956665039063 69.99999237060547 61.92729187011719 69.99999237060547 L 19.07270812988281 69.99999237060547 C 10.60043334960938 69.99999237060547 5.308616638183594 60.82461547851563 9.551467895507813 53.49128723144531 L 30.978759765625 16.45646667480469 C 33.09682464599609 12.79560852050781 36.79841613769531 10.96517181396484 40.50000381469727 10.96517181396484 Z" stroke="none" fill="#f57c00"/>
                            </g>
                            </g>
                        </g>
                        </svg>



                        </div>
                        <div className="menu">
                            <ul id="menu-items">
                                <li id="current-item">DASHBOARDS</li>
                                <li>THREATS</li>
                                <li>ACCOUNT</li>
                                <li>ADVANCED</li>
                            </ul>
                        </div>
                    </div>

                    <div className="topbar">
                        
                    </div>

                    <div className="content">
                        <div className="card-fullsize">
                            <span>DEVICE CONNECTION STATUS: {String( this.state.device.connected) }</span>
                            <br></br>
                            <span>DEVICE CONNECTION ERROR: {String( this.state.device.readable_error) }</span>
                        </div>
                    </div>

                    <div className="connectivity-bar">
                        <span>{this.state.device.readable_error}<i>I</i></span>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default Dashboard