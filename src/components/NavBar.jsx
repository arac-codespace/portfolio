import React from 'react';
import { NavLink } from 'react-router-dom'

import jss from 'jss';
import preset from 'jss-preset-default';

// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  brand: {
    color: "white",
    fontFamily: "Oswald, sans-serif",
    fontSize: "1.2em",
    "&:hover": {
      textDecoration: "none",
      color: "#d52a2a",
    }
  },
  icons: {
    color: "white",
    fontSize: "1.3rem",
    marginRight: "0.65rem",
    "&:hover": {
      color: "#d52a2a",
    }
  },
  brandContainer: {
    padding: "0.5rem 1rem"
  },
  navContainer: {
    backgroundColor: '#232833',
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
      height: "0",
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
              <a title="Github" href="https://github.com/arac-codespace" rel="noopener noreferrer" target="_blank"><i className={"fab fa-github " + classes.icons}></i></a>   
              <a title="Linkedin" href="https://www.linkedin.com/in/alexis-ramon-aguirre-cintron/" rel="noopener noreferrer" target="_blank"><i className={"fab fa-linkedin-in " + classes.icons}></i></a>               
            </div>
          </div>
        </div>

        <div className={"row justify-content-center " + classes.navLinksContainer}>
          <NavLink activeClassName={classes.selected} exact to="/" className={"col " + classes.navLink}>
            <i className={"fas fa-home " + classes.navIcons}></i> <span className={(isMobile?classes.isMobile:"")}>Home</span>
          </NavLink>
          <NavLink activeClassName={classes.selected} exact to="/Skills" className={"col " + classes.navLink}>
            <i className={"fas fa-cogs " + classes.navIcons}></i> <span className={(isMobile?classes.isMobile:"")}>Skills</span>
          </NavLink>
          <NavLink activeClassName={classes.selected} to="/Projects" className={"col " + classes.navLink}>
            <i className={"fas fa-clipboard-list " + classes.navIcons}></i> <span className={(isMobile?classes.isMobile:"")}>Projects</span>
          </NavLink>
          <NavLink activeClassName={classes.selected} exact to="/Contact" className={"col  " + classes.navLink}>
            <i className={"fas fa-at " + classes.navIcons}></i> <span className={(isMobile?classes.isMobile:"")}>Contact</span>
          </NavLink>                              
        </div>
      </div>
		)
	}
}

export default NavBar;