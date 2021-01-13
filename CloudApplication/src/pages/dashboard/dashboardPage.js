import React, { Component } from 'react';
import StatusBar from "./statusBar";

// the content from each tab
import Account from './dash_content/account';
import Dashboard from './dash_content/dashboard';
import Advanced from './dash_content/advanced';
import Threats from './dash_content/threats';
import dashboard from './dash_content/dashboard';

class DashboardPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scan: {
                scan_percentage: 1
            },
            content_active: {
                dashboard: true,
                threats: false,
                account: false,
                advanced: false
            }
        }
    }
    componentDidMount(){    

    }

    changePage = (value) => {
        switch(value){
            case "dashboard": 
                this.setState({content_active: { threats: false, account: false, advanced: false, dashboard: true }});
            break;
            case "threats":
                this.setState({content_active: { threats: true, account: false, advanced: false, dashboard: false }});
            break;
            case "account": 
                this.setState({content_active: { threats: false, account: true, advanced: false, dashboard: false }});
            break;
            case "advanced":
                this.setState({content_active: { threats: false, account: false, advanced: true, dashboard: false }});     
            break;   
        }
    }

    render(){
        return (
            <div className="main-content-height-max">
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
                        <li onClick={() => this.changePage("dashboard")} id={this.state.content_active.dashboard + ""}>DASHBOARDS</li>
                        <li onClick={() => this.changePage("threats")} id={this.state.content_active.threats + ""} >THREATS</li>
                        <li onClick={() => this.changePage("account")} id={this.state.content_active.account + ""} >ACCOUNT</li>
                        <li onClick={() => this.changePage("advanced")} id={this.state.content_active.advanced + ""} >ADVANCED</li>
                    </ul>
                </div>
            </div>

            <div className="topbar">
                
            </div>
                <Dashboard app_data={this.props.app_data} active={this.state.content_active.dashboard} />
                <Threats active={this.state.content_active.threats} />
                <Account active={this.state.content_active.account} />
                <Advanced active={this.state.content_active.advanced} />
                {/*the white status bar that is displayed at the bottom of the page which shows weather the app is connected to the severs or not*/}
                <StatusBar />
            </div>
        )
    }
}

export default DashboardPage;