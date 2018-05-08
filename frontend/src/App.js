import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import {withRouter} from 'react-router';

import NavBar from './components/NavBar'

import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WebDev from './components/WebDev'
import Geology from './components/Geology'
import Footer from './components/Footer'
import Contact from './components/Contact'

import './assets/css/App.css'

import jss from 'jss';
import preset from 'jss-preset-default';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
    borderRadius: "5px 5px 0 0",
    height: "100%" 
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
      isMobile: (window.innerWidth<=768)?true:false,
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

  // Triggered by resize event.  
  updateDimensions() {
      let innerWidth = window.innerWidth
      this.setState({
        innerWidth:  innerWidth,
        isMobile: (innerWidth<=768)?true:false
      });
  }

  render() {
    const currentURL = this.state.currentURL;
    const isMobile = this.state.isMobile;
    let wrapperClass = "";
    let footer = null;

    if (currentURL === "/") {
      wrapperClass = classes.componentWrapperNoBg
    } else {
      wrapperClass = classes.componentWrapper
      footer = <Footer/>
    }
    console.log(this.props.location)
    // console.log(currentURL)

    return (
      <div className="react-wrapper container-fluid">
        <div className="row justify-content-center">
          <NavBar currentURL={currentURL} isMobile={isMobile}/>          
          <div className={"col-12 col-lg-10 " + classes.content}>
            <TransitionGroup>     
              <CSSTransition timeout={500} classNames="content" key={this.props.location.pathname}>  
                <div>                  
                  <div className = {wrapperClass}>
                    <Switch location={this.props.location}>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/Projects" component={Projects}/>
                      <Route exact path="/Projects/WebDev" component={WebDev}/>
                      <Route exact path="/Projects/Geology" component={Geology}/>                                    
                      <Route exact path="/Skills" component={Skills}/>
                      <Route exact path="/Contact" component={Contact}/>
                    </Switch>
                  </div>
                  {footer}
                </div>
              </CSSTransition>        
            </TransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
