import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

import ProjectNav from './ProjectNav'

import stratMap from '../assets/imgs/stratcolPreviewCrop.png'
// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  projectsWrapper: {
  	padding: "1rem"
  },
  viewHeader: {
  	textAlign: "center"
  },
  toolset: {
  	marginBottom: "0.5rem"
  }
};


const { classes } = jss.createStyleSheet(styles).attach();
class WebDev extends React.Component {
	render() {
		return (
			<div className={"row align-items-center " + classes.projectsWrapper}>		
				<ProjectNav/>							
				<div className="col-12">
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
				</div>
				<div className="col-12">
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
				</div>

				<div className="col-12">
					<h3>Marine Species Fossil Database</h3>
					<p>
						Porting a simple "fossil book" project over to the net.  More of an encyclopedia entry than a database really.  
					</p>
					<strong><p className={classes.toolset}>Toolset</p></strong>
					<ul>
						<li>Ruby & Ruby on Rails</li>
						<li>jQuery</li>
						<li>Amazon S3</li>
					</ul>
				</div>												
			</div>
		);
	}
}

export default WebDev;