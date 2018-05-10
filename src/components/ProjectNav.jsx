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
  img: {
    height: "4rem"
  },
  projLink: {
    display: "inline-block"
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
  constructor(){
    super();
    this.state = {
      webDevImg: null,
      geoImg: null,
      currentPath: window.location.pathname,
      projURL: "/Projects",
      devURL: "/Projects/Webdev",
      geoURL: "/Projects/Geology"
    }
    this.handleWebHoverIn = this.handleWebHoverIn.bind(this);
    this.handleGeoHoverIn = this.handleGeoHoverIn.bind(this); 
    this.handleWebHoverOut = this.handleWebHoverOut.bind(this);
    this.handleGeoHoverOut = this.handleGeoHoverOut.bind(this);        
  }

  handleWebHoverIn(){
    if (this.state.currentPath === this.state.projURL || this.state.currentPath === this.state.geoURL)
    {      
      this.setState({
        webDevImg: WebDevImgColor
      })
    }
  }

  handleGeoHoverIn(){
    if (this.state.currentPath === this.state.projURL || this.state.currentPath === this.state.devURL)
    {      
      this.setState({
        geoImg: GeologyImgColor
      })
    }
  } 
  handleWebHoverOut(){
    if (this.state.currentPath === this.state.projURL || this.state.currentPath === this.state.geoURL)
    {      
      this.setState({
        webDevImg: WebDevImg
      })
    }
  }

  handleGeoHoverOut(){
    if (this.state.currentPath === this.state.projURL || this.state.currentPath === this.state.devURL)
    {      
      this.setState({
        geoImg: GeologyImg
      })
    }
  }   

  componentWillMount() {
    let geoImg = GeologyImg;
    let webDevImg = WebDevImg;
    let currentPath = this.state.currentPath;
    let devURL = "/Projects/Webdev"; 
    let geoURL = "/Projects/Geology";


    if (currentPath === devURL) {
      webDevImg = WebDevImgColor;
    } else if (currentPath === geoURL) {
      geoImg = GeologyImgColor;
    }    

    this.setState({
      webDevImg: webDevImg,
      geoImg: geoImg
    })
  }
  render() {

		return (
        <div className={"col-12 " + classes.projectNavWrapper}>
          <div className={"row " + classes.projectNavWrapper}>
    				<div className={"col-12"}>
    					<h1 className={classes.viewHeader}>Projects</h1>
    				</div>
            <div className={"col-6 text-center"}>
              <NavLink activeClassName={classes.selected} to={this.state.devURL} className={classes.anchorStyle} onMouseEnter={this.handleWebHoverIn} onMouseLeave={this.handleWebHoverOut}>
      					<img className={classes.img} alt="Web Development" src={this.state.webDevImg}></img>
                <br/>
                <span className={classes.projLink}>Web Development</span>
              </NavLink>		              
            </div>
            <div className={"col-6 text-center"}> 
              <div>             
                <NavLink activeClassName={classes.selected} to={this.state.geoURL} className={classes.anchorStyle} onMouseEnter={this.handleGeoHoverIn} onMouseLeave={this.handleGeoHoverOut}>
        					<img className={classes.img} alt="Geology" src={this.state.geoImg}></img>
                  <br/>
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