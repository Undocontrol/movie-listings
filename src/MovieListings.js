import React from 'react';
import './App.css';
import axios from 'axios';
import { API_KEY, PATH_BASE, PATH_MOVIE, PATH_IMAGE, PATH_PLAYING } from './api';


export class MovieListings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    }
  }
  componentDidMount(){
    axios.get(`${PATH_BASE}${PATH_MOVIE}${PATH_PLAYING}?language=en-US&api_key=${API_KEY}`)
      .then(res => {
        const movies = res.data.results;
        this.setState({ movies });
    }).catch(error => this.setState({ 
      error, isLoading: false 
    }));
  }
  render(){
    //console.log(this.state.movies);
    const MovieList = this.state.movies.map((movie, i ) => (
      <div className="movie" key={i}>
        <img src={`${PATH_IMAGE}` + movie.poster_path} alt="movie poster"/>
        <div className="item">
          <div className="description">
            <h3 className="title" alt="movie title">{movie.title}</h3>
            <h4 className="releaseDate">{movie.release_date}</h4>
            <span>{movie.genre_ids}</span>
          </div>
        </div>
      </div>
    ));
    return (
        <div className='MovieCollection'>{MovieList}</div>
     );
  }
}