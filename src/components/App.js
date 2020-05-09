import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../routes";
//import Login from './Login';
//import HomePage from './HomePage';

class App extends Component {

  render() {
    return (

      <Router >
        <Routes />
      </Router>

    );
  }
}

export default App;
