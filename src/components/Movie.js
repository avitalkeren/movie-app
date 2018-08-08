import React, { Component } from "react";

class Movie extends Component {
  render() {
    const { image } = this.props.movie;
    return (
      <div className="flex-container-item">
      <a href="">
        <img alt="poster" src={image.medium}  />
        </a>
      </div>
    );
  }
}

export default Movie;
