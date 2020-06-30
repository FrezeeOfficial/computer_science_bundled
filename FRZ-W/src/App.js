import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import Home from "./pages/home";
import Dashboard from "./pages/dashboard/dashboard";
import Status from "./pages/status";

import { render } from '@testing-library/react';


class App extends Component{
  render(){
    return (
      <div className="App">
          <Router>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/status" exact component={Status} />
            <Redirect from="*" to="/" />
            </Switch>
          </Router>

          <span className="copyright-notice">© James Wheeler 2020</span>
      </div>
    );
  }
}

export default App;
