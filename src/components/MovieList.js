import React, { Component } from "react";
import axios from "axios";
import { Movie } from ".";

class MovieList extends Component {
  state = { movies: [] };

  componentDidMount = () => {
    axios
      .get("http://api.tvmaze.com/shows?page=1")
      .then(response => {
        this.setState({ movies: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="flex-container">
        {movies.map(movie => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    );
  }
}

export default MovieList;
