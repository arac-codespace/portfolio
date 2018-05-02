import React from 'react';
import { NavLink } from 'react-router-dom'

import jss from 'jss';
import preset from 'jss-preset-default';

import Github from '../assets/imgs/github-logo.svg'
import Linkedin from '../assets/imgs/linkedin-logo.svg'
// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  brand: {
    color: "white",
    // fontWeight: "bold",
    fontFamily: "Oswald, sans-serif",
    fontSize: "1.2em",
    "&:hover": {
      textDecoration: "none",
      color: "#d52a2a",
    }
  },
  mediaIcons: {
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
    fontFamily: "Work Sans, sans-serif",
    color: "white",
    // fontWeight: "bold",
    "&:hover": {
      textDecoration: "none",
      fontWeight: "bold",
      color: "white",
      backgroundColor: "#9c1f1f"
    }
  },
  navIcons: {
    fontSize: "1.15rem"
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
  },
  isMobile: {
    display: "none"
  },    
};



const { classes } = jss.createStyleSheet(styles).attach();

class NavBar extends React.Component {
	render() {
    // console.log(this.props);
    let isMobile = this.props.isMobile


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
              <img alt="Github" src={Github} className={classes.mediaIcons}></img>   
              <img alt="Linkedin" src={Linkedin} className={classes.mediaIcons}></img>                 
            </div>
          </div>
        </div>

        <div className={"row justify-content-center " + classes.navLinksContainer}>
          <NavLink activeClassName={classes.selected} to="/About" className={"col " + classes.navLink}>
            <i className={"fas fa-address-card " + classes.navIcons}></i> <span className={(isMobile?classes.isMobile:"")}>About</span>
          </NavLink>
          <NavLink activeClassName={classes.selected} to="/Skills" className={"col " + classes.navLink}>
            <i className={"fas fa-cogs " + classes.navIcons}></i> <span className={(isMobile?classes.isMobile:"")}>Skills</span>
          </NavLink>
          <NavLink activeClassName={classes.selected} to="/Projects" className={"col " + classes.navLink}>
            <i className={"fas fa-clipboard-list " + classes.navIcons}></i> <span className={(isMobile?classes.isMobile:"")}>Projects</span>
          </NavLink>
          <NavLink activeClassName={classes.selected} to="/Contact" className={"col  " + classes.navLink}>
            <i className={"fas fa-at " + classes.navIcons}></i> <span className={(this.props.isMobile?classes.isMobile:"")}>Contact</span>
          </NavLink>                              
        </div>
      </div>
		)
	}
}

export default NavBar;