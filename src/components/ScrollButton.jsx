import React from 'react';
import UpArrow from '../assets/imgs/upwards-arrow.svg'
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
  btnStyle: {
    padding:"0",
    backgroundColor: "#d52a2a",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    height:"2rem",
    width:"2rem",
    "&:hover": {
      backgroundColor: "#9c1f1f",
    },
    "&:focus": {
      outline: "5px auto white"
    }
  },
  iconStyle: {
    height: "1rem",
    marginBottom: "5px"
  }   
};


const { classes } = jss.createStyleSheet(styles).attach();
// https://codepen.io/Qbrid/pen/GjVvwL
class ScrollButton extends React.Component {
  
  render () {
      return (
        <button title='Back to top' className={classes.btnStyle} 
          onClick={ () => { document.getElementsByClassName("logo-container")[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}); }}>
          <img alt="UpArrow" src={UpArrow} className={classes.iconStyle}></img>             
        </button>
      );
   }
};

export default ScrollButton; 