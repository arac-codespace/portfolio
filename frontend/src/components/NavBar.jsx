import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import Home from '../components/Home'

import jss from 'jss';
import preset from 'jss-preset-default';

import Github from '../assets/imgs/github-logo.svg'
import Linkedin from '../assets/imgs/linkedin-logo.svg'
// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  brand: {
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "none",
      color: "#d52a2a",
    }
  },
  navIcons: {
    height: "1.2rem",
    paddingRight: "0.5rem"
  },
  brandContainer: {
    padding: "0.5rem 1rem"
  },
  navContainer: {
    backgroundColor: '#232833',
    // padding: "0px !important"
  },
  navLinksContainer: {
    backgroundColor: '#d52a2a',
    textAlign: "center"
  },
  navLink: {
    display: "block",
    padding: ".5rem 1rem",
    color: "white",
    // fontWeight: "bold",
    "&:hover": {
      textDecoration: "none",
      // fontWeight: "bold",
      color: "white",
      backgroundColor: "#9c1f1f"
    }
  },
  selected: {
    backgroundColor: "#9c1f1f",
    fontWeight: "bold",
    '&:after': {
      content: '"\\25BC"',
      // position: "absolute",
      // width: "0",
      height: "0",
      // borderTop: "9px solid transparent",
      // borderBottom: "9px solid transparent",
      // borderRight: "8px solid #fff",
      // bottom: "6px",
      left: "auto",
      right: "50%",
      color: "#9c1f1f",
      display: "block"
    }
  }
};



const { classes } = jss.createStyleSheet(styles).attach();

class NavBar extends React.Component {
	render() {
    console.log(this.props);
		return (
      <div className={"col-12 " + classes.navContainer}>
        <div className={"row align-items-center justify-content-around " + classes.brandContainer}>        
          <div className="col-9 logo-container">
            <NavLink to="/" className={classes.brand}>
                ALEXIS AGUIRRE
            </NavLink>
          </div>
          <div className="col media-links">
            <div className="row justify-content-center">
              <img src={Github} className={classes.navIcons}></img>   
              <img src={Linkedin} className={classes.navIcons}></img>                 
            </div>
          </div>
        </div>

        <div className={"row justify-content-center " + classes.navLinksContainer}>
          <NavLink activeClassName={classes.selected} to="/About" className={"col " + classes.navLink}>
            About
          </NavLink>
          <NavLink activeClassName={classes.selected} to="/Skills" className={"col " + classes.navLink}>
            Skills
          </NavLink>
          <NavLink activeClassName={classes.selected} to="/Projects" className={"col " + classes.navLink}>
            Projects
          </NavLink>
          <NavLink activeClassName={classes.selected} to="/Contact" className={"col " + classes.navLink}>
            Contact
          </NavLink>                              
        </div>
      </div>
		)
	}
}

export default NavBar;