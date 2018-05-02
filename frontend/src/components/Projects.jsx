import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

import ProjectNav from './ProjectNav'

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
class Projects extends React.Component {
	render() {
		return (
			<div className={"row align-items-center " + classes.projectsWrapper}>
				<ProjectNav/>
			</div>
		);
	}
}

export default Projects;