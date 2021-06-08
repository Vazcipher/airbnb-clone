
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './utility/Navbar/NavBar';
import Home from './pages/Home/Home';

class componentName extends Component {

  render() {
    return (
      <Router>
        <Route path="/" component={NavBar}/>
        <Route path="" component={Home}/>
      </Router>
    );
  }
}

export default componentName;