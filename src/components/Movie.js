import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Movie extends Component {
  render() {
    const { image } = this.props.movie;
    const {id} = this.props.movie;
    return (
      <div className="flex-container-item">
        <Link to={"/movie/" + id}>
          <img alt="poster" src={image.medium}  />
        </Link>
      </div>
    );
  }
}

export default Movie;
