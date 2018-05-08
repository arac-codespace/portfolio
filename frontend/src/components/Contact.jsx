import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

import Github from '../assets/imgs/github-logo-red.svg'
import Mail from '../assets/imgs/mail-red.svg'
import Linkedin from '../assets/imgs/linkedin-logo-red.svg'
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
  img: {
  	height:"1.5rem",
  	marginRight: "0.5rem"
  },
  labelStyle: {
  	display: "inline-block",
  	marginRight: "2rem"
  },
  anchorStyle: {
  	color: "#d52a2a",
  	"&:hover": {
  		color: "#d52a2a"
  	}
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
					<div>						
	          <a className={classes.anchorStyle} href="mailto:alex.aguirre0026@gmail.com"><img alt="Mail" src={Mail} className={classes.img}></img><span>alex.aguirre0026@gmail.com</span></a>   					
					</div>
					<div>
	          <a className={classes.anchorStyle} href="https://github.com/arac-codespace" target="_blank"><img alt="Github" src={Github} className={classes.img}></img><span>arac-codespace</span></a>   					
					</div>
					<div>						
	          <a className={classes.anchorStyle} href="https://www.linkedin.com/in/alexis-ramon-aguirre-cintron/" target="_blank"><img alt="Linkedin" src={Linkedin} className={classes.img}></img><span>alexis-ramon-aguirre-cintron</span></a>   					
					</div>					
				</div>
			</div>
		);
	}
}

export default Contact;