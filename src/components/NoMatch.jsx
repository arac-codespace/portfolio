import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  wrapper: {
  	padding: "1rem"
  },
  sectionDescription: {
  	marginBottom: "0.5rem"
  },
  section: {
  	marginTop: "1rem",
    borderTop: "1px solid #232833",
    padding: "2rem 0",
    textAlign: "center" 	
  }, 
  icons: {
  	fontSize:"1.5rem",
  	marginRight: "0.5rem"
  },
  labelStyle: {
  	display: "inline-block",
  	marginRight: "2rem"
  },
  anchorStyle: {
  	color: "#d52a2a",
  	"&:hover": {
  		color: "#9c1f1f"
  	}
  },
  infoContainer: {
    paddingBottom: "0.5rem"
  }
};


const { classes } = jss.createStyleSheet(styles).attach();



class NoMatch extends React.Component {
	render() {
		return (
			<div className={classes.wrapper}>
				<h1 className="text-center">Page Not Found</h1>
				<div className={classes.section}>
          <h4>Sorry! The page you're looking for doesn't exist. </h4>				
				</div>
			</div>
		);
	}
}

export default NoMatch;