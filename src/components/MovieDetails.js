import React, { Component } from "react";


class MovieDetails extends Component {
    state = { details: [] };
 
    componentDidMount = () => {
        axios
          .get("http://api.tvmaze.com/shows/" + this.props.movie_id)
          .then(response => {
            this.setState({ details: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      };
    
    render() {
      const { details } = this.state;

      return (
        <div>
            <h1>{details.name}</h1>
            <img alt="poster" src={details.image.original} />
            <div>{details.summary}</div>
        </div>
      );
    }
  }
  
  export default MovieDetails;