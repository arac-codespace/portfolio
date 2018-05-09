import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  contactWrapper: {
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



class Contact extends React.Component {
	render() {
		return (
			<div className={classes.contactWrapper}>
				<h1 className="text-center">Contact</h1>
				<div className={classes.section}>
					<p className="text-center">I am available for hire and open to any ideas or suggestions.</p>
					<div className={classes.infoContainer}>						
	          <a className={classes.anchorStyle} href="mailto:alex.aguirre0026@gmail.com"><i className={"fas fa-envelope " + classes.icons}></i><span>alex.aguirre0026@gmail.com</span></a>   					
					</div>
					<div className={classes.infoContainer}>
	          <a className={classes.anchorStyle} href="https://github.com/arac-codespace" rel="noopener noreferrer" target="_blank"><i className={"fab fa-github " + classes.icons}></i><span>arac-codespace</span></a>   					
					</div>
					<div className={classes.infoContainer}>						
	          <a className={classes.anchorStyle} href="https://www.linkedin.com/in/alexis-ramon-aguirre-cintron/" rel="noopener noreferrer" target="_blank"><i className={"fab fa-linkedin-in " + classes.icons}></i><span>alexis-ramon-aguirre-cintron</span></a>   					
					</div>					
				</div>
			</div>
		);
	}
}

export default Contact;