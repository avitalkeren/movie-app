import React, { Component } from "react";
import axios from "axios";

class MovieDetails extends Component {
  state = {
    details: {
      name: "",
      image: {},
      summary: "",
      genres: [], 
      rating: {average: ""},
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
      <div className="flex-container">
      <div className="flex-container-item">
        <header className="header"><h1>{details.name}</h1></header>
        <article className="main">
          <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
          </article>
          <p><b>Type: </b>{details.type}</p>
          <b>Genres: </b>
          <ul>
              {details.genres.map(gener => (<li key={gener}>{gener} </li>))}
          </ul>
          <p><b>Rating:</b>{details.rating.average}</p>
          <p><b>Official Site: </b><a href={details.officialSite}>{details.officialSite}</a></p>
        </div>
        <aside className="aside aside-2"><img alt="poster" src={details.image.original} /></aside>
      </div>
    );
  }
}

export default MovieDetails;
