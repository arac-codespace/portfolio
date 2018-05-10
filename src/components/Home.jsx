import React from 'react'
import jss from 'jss';
import preset from 'jss-preset-default';

// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  centerText: {
    textAlign: "center"
  },
  paragraphText: {
  	textAlign: "justify",
  	marginTop: "2rem"
  },
  offsetText: {
  	textAlign: "right",
  },
  homeWrapper: {
		textShadow: "1px 1px 3px #232833",
    color: "white",
    // padding: "1em",
    fontWeight: "bold",
    marginTop:"3rem"
  }
};



const { classes } = jss.createStyleSheet(styles).attach();
class Home extends React.Component {
	render() {
		return (
			<div className={classes.homeWrapper}>

				<h1 className={classes.centerText}>Alexis Aguirre Cintrón</h1>
				<h2 className={classes.centerText}>Geologist &amp; Web Developer</h2>
				<p className={classes.paragraphText}>
					Obssessed with stratigraphy and the visualization of data.  
					I aim to create visualizations for geologic and environmental 
					data easily accessible through the web. *
				</p>
				<p className={classes.offsetText}>* Making pretty websites while at it.</p>														
			</div>

		);
	}
}

export default Home;