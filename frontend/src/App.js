import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {withRouter} from 'react-router';

import NavBar from './components/NavBar'

import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'

import Img from './assets/imgs/alec-weir-26819-unsplash.jpg'
import './assets/css/App.css'

import jss from 'jss';
import preset from 'jss-preset-default';

// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  content: {
    height: "100%",
    paddingTop: "1rem"    
  },
  componentWrapper: {
    backgroundColor: '#ffffff80',
    padding: "1rem 2rem",
    borderRadius: "5px" 
  },
  componentWrapperNoBg: {
    extend: "componentWrapper",
    backgroundColor: "transparent"
  }
};


const { classes } = jss.createStyleSheet(styles).attach();

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentURL: window.location.pathname
    }
  }
  // https://stackoverflow.com/questions/45373742/detect-route-change-with-react-router
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      let currentURL = location.pathname;
      this.setState({
        currentURL: currentURL
      })
    });
  }
  componentWillUnmount() {
      this.unlisten();
  }  

  // clickedLink() {
  //   let currentURL = window.location.pathname;
  //   console.log(currentURL);
  //   this.setState({
  //     currentURL: currentURL,
  //   });
  // }
  render() {
    // console.log(this.state.currentURL);
    const currentURL = this.state.currentURL;
    let wrapperClass = "";

    if (currentURL === "/") {
      wrapperClass = classes.componentWrapperNoBg
    } else {
      wrapperClass = classes.componentWrapper
    }

    return (
      // <Router>
        <div className="react-wrapper container-fluid">
          <div className="row justify-content-center">
            <NavBar currentURL={currentURL} />
            <div className={"col-12 col-lg-10 " + classes.content}>
              <div className = {wrapperClass}>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/About" component={About}/>                  
                  <Route exact path="/Projects" component={Projects}/>
              </div>
            </div>
          </div>
        </div>
      // </Router>
    );
  }
}

export default withRouter(App);
