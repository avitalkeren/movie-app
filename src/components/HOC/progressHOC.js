import React, { Component } from "react";
import "./progressHOC.css";

const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );

const progressHOC = (propName) => (wrrappedComponent) => {
    return class progressHOC extends Component {
        render(){
            console.log(isEmpty(this.state));
            return (isEmpty(this.state) || isEmpty(this.state[propName])) ? <div className = "spinner"/> : <wrrappedComponent {...this.props} />; 
        }
    }
}

export default progressHOC;

