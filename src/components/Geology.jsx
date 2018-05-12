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
  linkStyle: {
  	color: "#9c1f1f",
  	"&:hover": {
  		color: "#d52a2a"
  	}
  },
  projectSection: {
  	marginTop: "1rem",
    borderTop: "1px solid #232833",
    padding: "2rem 0"  	
  },  
  paragraph: {
  	textAlign: "justify"
  }  
};


const { classes } = jss.createStyleSheet(styles).attach();
class Geology extends React.Component {
	render() {
			let pdfStruct = "https://drive.google.com/file/d/1HR0a5KOlMNkKAALFF7O46qFuTmfS5xKJ/view?usp=sharing"
			let pdfStrat = "https://drive.google.com/file/d/18VZyr4VPIJcYXdU8A_GSdtiiCjKPQc7e/view?usp=sharing"
		return (
			<div className={classes.projectsWrapper}>
				<div className={"row align-items-center " + classes.projectsWrapper}>
					<ProjectNav/>	
					<div className={"col-12 " + classes.projectSection}>
						<h3>Structure of the Ponce Limestone</h3>
						<p className={classes.paragraph}>
							&emsp; An analysis of the geological structure of the Ponce Limestone is presented derived from
							data collected on the field.
						</p>
						<p className={classes.paragraph}>
							&emsp; The data was collected from three distinct sites located on the
							municipality of Ponce. Two phases of extension were identified; (1) a north-northwest extension
							evidenced by the north-northeast trend of normal faults and the right lateral motion of an
							oblique-slip fault identified at Site 1, (2) a north-northeast extension evidenced by the northnorthwest
							trend of normal faults and the oblique-slip left lateral motion fault identified at Site 2.
							The north-northwest extension could also be identified at Site 3 where northeast trending faults
							crosscut strata of the Juana Diaz Formation.
						</p>
						<h4>Link: <a rel="noopener noreferrer" target="_blank" className={classes.linkStyle} href={pdfStruct}>PDF Format</a></h4>										
					</div>
					<div className={"col-12 " + classes.projectSection}>
						<h3>Stratrigraphic analysis of an exposed section mountain cut at Extensión Alta Vista, Ponce</h3>
						<p className={classes.paragraph}>
							&emsp; A sequence stratigraphy column is presented for a well exposed mountain cut located at
							the urbanization “Ponce Hillscrest Village” in Ponce. 
						</p>
						<p className={classes.paragraph}>
							&emsp; Data obtained from the field and from previous studies is utilized to identify, analyze and interpret 
							the stratigraphy of the area. Six parasequences representing a marine transgression accompanied by a landward
							shift of deep marine facies were identified. Based on the depositional environments represented
							by the lithology and the fossil content of the rock units, a fringing reef environment is suggested
							to explain the observed characteristics of the area. Furtheremore, based on the lack of
							Lepidociclina, the abundance of Marginopora, and the lithologic characteristics of the area it is
							concluded that the studied outcrop represents part of the Ponce Limestone.
						</p>
						<h4>Link: <a rel="noopener noreferrer" target="_blank" className={classes.linkStyle} href={pdfStrat}>PDF Format</a></h4>					
					</div>													
				</div>	
			</div>
		);
	}
}

export default Geology;