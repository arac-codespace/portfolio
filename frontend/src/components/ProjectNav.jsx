import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

import GeologyImg from '../assets/imgs/geology.svg'
import WebDevImg from '../assets/imgs/programming.svg'

import GeologyImgColor from '../assets/imgs/geology-color.svg'
import WebDevImgColor from '../assets/imgs/programming-color.svg'

import { NavLink } from 'react-router-dom'

// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  projectNavWrapper: {
  	marginBottom: "1rem"
  },
  viewHeader: {
  	textAlign: "center"
  },
  toolset: {
  	marginBottom: "0.5rem"
  },
  img: {
    height: "4rem"
  },
  projLink: {
    display: "block",
    // color: "#212529",
    // fontFamily: "'Work Sans', serif !important",
    // fontWeight: "bold"
  },
  anchorStyle: {
    color: "#212529",
    fontFamily: "'Work Sans', serif !important",
    fontWeight: "bold",
    "&:hover": {
      color:"#d52a2a"
    }
  }
};


const { classes } = jss.createStyleSheet(styles).attach();
class ProjectNav extends React.Component {
	render() {
    let geoImg = GeologyImg;
    let webDevImg = WebDevImg;
    let currentLoc = window.location.pathname;

    let devURL = "/Projects/Webdev"; 
    let geoURL = "/Projects/Geology";

    if (currentLoc === devURL) {
      webDevImg = WebDevImgColor;
    } else if (currentLoc === geoURL) {
      geoImg = GeologyImgColor;
    }

		return (
        <div className={"col-12 " + classes.projectNavWrapper}>
          <div className={"row"}>
    				<div className={"col-12"}>
    					<h1 className={classes.viewHeader}>Projects</h1>
    				</div>
            <div className={"col-6 text-center"}>
              <NavLink activeClassName={classes.selected} to={devURL} className={classes.anchorStyle}>
      					<img className={classes.img} alt="Web Development" src={webDevImg}></img>
                <span className={classes.projLink}>Web Development</span>
              </NavLink>		              
            </div>
            <div className={"col-6 text-center"}> 
              <div>             
                <NavLink activeClassName={classes.selected} to={geoURL} className={classes.anchorStyle}>
        					<img className={classes.img} alt="Geology" src={geoImg}></img>
                  <span className={classes.projLink}>Geology</span>
                </NavLink>
              </div>												
            </div>            

          </div>
        </div>
		);
	}
}

export default ProjectNav;