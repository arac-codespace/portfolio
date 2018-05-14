import React from 'react'
import jss from 'jss';
import preset from 'jss-preset-default';

import {NavLink} from 'react-router-dom'
// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  paragraphText: {
  	marginTop: "0.5rem"
  },
  homeWrapper: {
		textShadow: "1px 1px 1px black",
    color: "white",
    // padding: "1em",
    fontWeight: "bold",
    marginTop:"1.5rem",
    // textAlign: "center"
  },
  descriptionDiv: {
    // width: "70%",
    // textAlign: "justify",
    marginTop: "1.25rem",
    // fontWeight: "normal"
    // textTransform: "uppercase"
  },
  centerText: {
    textTransform: "uppercase",
    textAlign: "center"
  },
  mainHead: {
    extend: "centerText",
    '@media (min-width: 768px)': {
      fontSize: "3.25rem"
    },    
  },
  secHead: {
    extend: "centerText",
    '@media (min-width: 768px)': {
      fontSize: "2rem"
    },
  },  
  linkStyle: {
    color: "white",
    textDecoration: "none",
    borderBottom: "2px dotted #fff",    
    "&:hover": {      
      color: "#d52a2a",
      textDecoration:"none",
      borderBottom: "2px dotted #d52a2a",    

    }
  },  
};



const { classes } = jss.createStyleSheet(styles).attach();
class Home extends React.Component {
	render() {
		return (
			<div className={classes.homeWrapper}>

				<h1 className={classes.mainHead}>Alexis Aguirre Cintrón</h1>
				<h4 className={classes.secHead}>Geologist and Web Developer</h4>
        <div className={classes.descriptionDiv}> 
  				<p>        
            Based out of Juana Díaz, PR.  I'm a Geologist and Web Developer 
            who is particularly interested in developing visualizations 
            for geologic and environmental data.
          </p>	
          <div>           
            <p> 
              Need a Geologist with a penchant for coding?                  
              Need help getting a website up and running?                
            </p>
            <p>
              <NavLink className={classes.linkStyle} exact to="/Contact">Contact me</NavLink>. 
            </p>        
          </div>
        </div>
			</div>

		);
	}
}

export default Home;