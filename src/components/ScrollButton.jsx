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
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    // setInterval(functionToPerform, everyXMilliseconds)
    //https://www.w3schools.com/jsref/met_win_setinterval.asp
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return (
        <button title='Back to top' className={classes.btnStyle} 
          onClick={ () => { this.scrollToTop(); }}>
          <img alt="UpArrow" src={UpArrow} className={classes.iconStyle}></img>             
        </button>
      );
   }
};

export default ScrollButton; 