import React, { Component } from "react";


const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );

const progressHOC = (propName) => (wrrappedComponent) => {
    reutn class progressHOC extends Component {
        render(){
           return isEmpty(this.props[propName]) ? <div className = "loader"/> : <wrrappedComponent {...this.props} />; 
        }
    }
}

export default progressHOC;

