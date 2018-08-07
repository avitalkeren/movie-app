import React, { Component } from "react";

class Movie extends Component {
  render() {
    const { image } = this.props.movie;
    return (
      <div className="flex-container-item">
        <img alt="poster" src={image.medium} />
      </div>
    );
  }
}

export default Movie;
