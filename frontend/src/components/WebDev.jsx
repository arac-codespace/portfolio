import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

import ProjectNav from './ProjectNav'

// One time setup with default plugins and settings.
jss.setup(preset());

/*
red:#d52a2a
dark-blue: #232833
dark-red: #9c1f1f
black: #212529
*/
const styles = {
  projectsWrapper: {
  	padding: "1rem"
  },
  toolset: {
  	marginBottom: "0.5rem"
  },
  projectSection: {
  	marginTop: "1rem",
    borderTop: "1px solid #232833",
    padding: "2rem 0"  	
  },
  linkStyle: {
  	color: "#9c1f1f",
  	"&:hover": {
  		color: "#d52a2a"
  	}
  }
};


const { classes } = jss.createStyleSheet(styles).attach();
class WebDev extends React.Component {
	render() {
		return (
			<div className={"row align-items-center " + classes.projectsWrapper}>		
				<ProjectNav/>							
				<div className={"col-12 " + classes.projectSection}>
					<h3>stratMap</h3>
					<p>
						Automatically generate and plot a stratigraphic column based on the information the user provides.
					</p>
					<ul>
						<li>Generate stratigraphic columns and download them in SVG format.</li>
						<li>Automatically looks for icons and additional taxon information from the Paleobiology Database (PBDB).</li>
						<li>Plot columns as markers on a map.  View and interact with multiple columns in the same view page.</li>
					</ul>
					<strong><p className={classes.toolset}>Toolset</p></strong>
					<ul>
						<li>Ruby & Ruby on Rails</li>
						<li>jQuery</li>
						<li>D3.js</li>
						<li>SVG Crowbar</li>						
						<li>Adobe Illustrator</li>
					</ul>
					<h4>Link: <a className={classes.linkStyle} href="https://strat-map.herokuapp.com/">strat-map.herokuapp.com</a></h4>
				</div>
				<div className={"col-12 " + classes.projectSection}>
					<h3>Portfolio</h3>
					<p>
						A simple SPA portfolio for experimentation and exposure purposes.
					</p>
					<strong><p className={classes.toolset}>Toolset</p></strong>
					<ul>
						<li>Django</li>
						<li>React.js</li>
						<li>React Router</li>
						<li>Bootstrap v4</li>
						<li>JSS</li>
					</ul>
					<h4>Link: <a className={classes.linkStyle} href="#">alexis-aguirre.herokuapp.com</a></h4>					
				</div>

				<div className={"col-12 " + classes.projectSection}>
					<h3>Marine Species Fossil Database</h3>
					<p>
						Porting a simple "fossil book" project over to the net.  More of an encyclopedia entry than a database really.  
					</p>
					<strong><p className={classes.toolset}>Toolset</p></strong>
					<ul>
						<li>Ruby & Ruby on Rails</li>
						<li>jQuery</li>
						<li>Bootstrap v3</li>
						<li>Amazon S3</li>
					</ul>
					<h4>Link: <a className={classes.linkStyle} href="https://marine-species-fossil-database.herokuapp.com">marine-species-fossil-database.herokuapp.com</a></h4>										
				</div>	
				<div className={"col-12 " + classes.projectSection}>
					<h3>Github Repository</h3>
					<p>
						Visit my Github repository to view the source code of these and other projects/experiments.  
					</p>
					<h4>Link: <a className={classes.linkStyle} href="https://github.com/arac-codespace">github.com/arac-codespace</a></h4>										
				</div>															
			</div>
		);
	}
}

export default WebDev;