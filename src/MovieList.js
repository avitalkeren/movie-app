import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';
 


class MovieList extends Component{
    constructor() {
      super();
      this.state = {movies: [], list: "", loading: true};
    };
    
    componentDidMount(){
      let currentComponent = this;
      if (currentComponent.state.loading == false) return;
      axios.get('http://api.tvmaze.com/shows?page=1')
            .then(function (response) {
                console.log(response.data);
                currentComponent.setState({movies: response.data, loading: false});
            })
            .catch(function (error) {
                console.log("ERROR: " + error);
            });
        }

      render() {
        let currentComponent = this;

        if (this.state.loading) {
          return <div>Loading...</div>
        }
        if (this.state.movies.length === 0) {
          return <div>There aren't any movies !</div>
        }
        console.log("this should be called once");
        currentComponent.setState({list: currentComponent.state.movies.map((movie) => (<Movie movie={movie} />))});
        this.setState({loading: false});
        return (<div className="flex-container">{this.state.list}</div>)
    }
}  

class Movie extends Component {
    render() {
      return (
        <div>
            <h3>{this.props.movie.name}</h3>
            <Image src={this.props.movie.image.medium} />
        </div>
      );
    }
  }


  


export default MovieList;
  