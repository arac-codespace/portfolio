import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import {withRouter} from 'react-router';

import NavBar from './components/NavBar'

import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import WebDev from './components/WebDev'
import Geology from './components/Geology'


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
    // padding: "1rem 2rem",
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
      currentURL: window.location.pathname,
      innerWidth: window.innerWidth,
      isMobile: (window.innerWidth<=768)?true:false

    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  // https://stackoverflow.com/questions/45373742/detect-route-change-with-react-router
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);        
    this.unlisten = this.props.history.listen((location, action) => {
      let currentURL = location.pathname;
      this.setState({
        currentURL: currentURL
      })
    });
  }
  // componentWillUnmount() {
  //     this.unlisten();
  // }  

  // Triggered by resize event.  
  updateDimensions() {
      let innerWidth = window.innerWidth
      this.setState({
        innerWidth:  innerWidth,
        isMobile: (innerWidth<=768)?true:false
      });
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
    const isMobile = this.state.isMobile;
    let wrapperClass = "";

    if (currentURL === "/") {
      wrapperClass = classes.componentWrapperNoBg
    } else {
      wrapperClass = classes.componentWrapper
    }
    // console.log(this.state.innerWidth)
    // console.log(this.state.isMobile)
    return (
      // <Router>
        <div className="react-wrapper container-fluid">
          <div className="row justify-content-center">
            <NavBar currentURL={currentURL} isMobile={isMobile}/>
            <div className={"col-12 col-lg-10 " + classes.content}>
              <div className = {wrapperClass}>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/About" component={About}/>                  
                  <Route exact path="/Projects" component={Projects}/>
                  <Route exact path="/Projects/WebDev" component={WebDev}/>
                  <Route exact path="/Projects/Geology" component={Geology}/>                                    
                  <Route exact path="/Skills" component={Skills}/>
              </div>
            </div>
          </div>
        </div>
      // </Router>
    );
  }
}

export default withRouter(App);
