import React, { Component } from "react";
import axios from "axios";


class MovieDetails extends Component {
    state = { details: [], id: parseInt(this.props.match.params.id) };

    componentDidMount = () => {
        console.log("the d is: " +  this.state.id);
        axios
          .get("http://api.tvmaze.com/shows/" + this.state.id)
          .then(response => {
            this.setState({ details: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      };
    
    render() {
      const { details } = this.state;
    console.log(details);

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