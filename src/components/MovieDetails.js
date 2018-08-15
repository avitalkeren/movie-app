import React, { Component } from "react";
import axios from "axios";

class MovieDetails extends Component {
  state = {
    details: {
      name: "",
      image: {},
      summary: ""
    },
    id: parseInt(this.props.match.params.id, 10)
  };

  componentDidMount = () => {
    const { id } = this.state;
    axios
      .get(`http://api.tvmaze.com/shows/${id}`)
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
      <div class="flex-container">
        <header class="header"><h1>{details.name}</h1></header>
        <article class="main">
          <div dangerouslySetInnerHTML={{__html: details.summary}}></div>
        </article>
        <aside class="aside aside-2"><img alt="poster" src={details.image.original} /></aside>
      </div>
    );
  }
}

export default MovieDetails;
