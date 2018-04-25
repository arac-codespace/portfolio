import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Projects from './components/Projects'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
        </div>
      </Router>
    );
  }
}

export default App;
