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
  }

};


const { classes } = jss.createStyleSheet(styles).attach();



class Skills extends React.Component {
	render() {
		return (
			<div className={classes.skillsWrapper}>
				<h1 className="text-center">Skills</h1>
				<h3>Web Development</h3>
				<p className={classes.sectionDescription}>
					Currently developing applications with Django, 
					React and associated JS libraries.  I expect my next projects
					to incorporate Redux (when necessary) for its data managing
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

				<h3>Geology</h3>
				<p className={classes.sectionDescription}> General knowledge about the structure and evolution of the earth and its natural resources. 
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
				<h3>Other</h3>
				<p className={classes.sectionDescription}>If there are instructions, I can learn it.</p>
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
		);
	}
}

export default Skills;