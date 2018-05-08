import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

import ScrollButton from './ScrollButton';
import { NavLink } from 'react-router-dom'

// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  footContainer: {
    padding: "0rem 1rem"
  },
  footer: {
    backgroundColor: '#232833',
		borderRadius: "0 0 5px 5px"    
    // padding: "0px !important"
  },  
  footerText: {
  	color: "white",
  	margin:"0",
  	padding: "0.5rem 0"
  },
  container: {
  	padding: "0.5rem 1rem"
  },
  componentWrapper: {
  	marginBottom: "1rem",
    // padding: "0rem 2rem !important"     
  },
};


const { classes } = jss.createStyleSheet(styles).attach();
class Footer extends React.Component {
	constructor(){
		super();
		this.handleOnClick = this.handleOnClick.bind(this);
	}
	handleOnClick() {
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);		
	};
	render() {
		return (
      <div className={"col-12 " + classes.componentWrapper}>

        <div className={"row " + classes.footer}>
          <div className={"col-12"}>
            <div className={"row align-items-center justify-content-between"}>

            	<div className={classes.container}>
            		<small className={classes.footerText}>© 2018 Alexis Aguirre</small>
            	</div>
            	<div className={classes.container}>
            		<ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
            	</div>  

            </div>	
          </div>  
        </div>

      </div>				
		);
	}
}

export default Footer;