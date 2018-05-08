import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  skillsWrapper: {
  	padding: "1rem"
  },
  sectionDescription: {
  	marginBottom: "0.5rem"
  },
  projectSection: {
  	marginTop: "1rem",
    borderTop: "1px solid #232833",
    padding: "2rem 0"  	
  }, 
};


const { classes } = jss.createStyleSheet(styles).attach();



class Skills extends React.Component {
	render() {
		return (
			<div className={classes.skillsWrapper}>
				<h1 className="text-center">Skills</h1>
				<div className={classes.projectSection}>
					<h3>Web Development</h3>
					<p className={classes.sectionDescription}>
						&emsp; Currently developing applications with Django, 
						React and associated JS libraries.  I expect my next projects
						to incorporate Redux (when necessary) for its data-management
						capabilities. 
					</p>
					<ul>
						<li>
							Python & Django
						</li>
						<li>
							Ruby & Ruby on Rails
						</li>
						<li>
							React.js
						</li>
						<li>
							D3.js
						</li>		
						<li>
							Styling libraries
							<ul>
								<li>Bootstrap</li>
								<li>JSS</li>
								<li>React Transition Group</li>
							</ul>
						</li>																			
					</ul>
				</div>
				<div className={classes.projectSection}>
					<h3>Geology</h3>
					<p className={classes.sectionDescription}> &emsp; General knowledge about the structure and evolution of the earth and its natural resources. 
							I'm particularly interested in the analysis and interpretation of depositional environments 
							and sequence stratigraphy.
					</p>
					<ul>
						<li>Collection, analysis and interpretation of geological data (textual, numerical, graphical...).</li>
						<li>Basic knowledge on well logging.</li>
						<li>Polarized light microscopy.</li>
						<li>Field methods and techniques.</li>
						<li>Geologist-in-Training Certification</li>
					</ul>
				</div>
				<div className={classes.projectSection}>
					<h3>Other</h3>
					<ul>
						<li>Graphics Editor </li>
						<ul>
							<li>Adobe Photoshop</li>
							<li>Adobe Illustrator</li>
							<li>Inkscape - <small><strong>Beginner</strong></small></li>					
						</ul>
						<li>GIS Software</li>
						<ul>
							<li>QGIS - <small><strong>Beginner</strong></small></li>
						</ul>
						<li>Other</li>
						<ul>
							<li>Microsoft Office (Word, Excel, Power Point)</li>
							<li>Open Office (Writer, Calc)</li>
							<li>Stereonet 8 - <small><strong>Beginner</strong></small></li>
							<li>Vegetable Gardening - <small><strong>!!!</strong></small></li>
						</ul>
					</ul>
				</div>
			</div>
		);
	}
}

export default Skills;