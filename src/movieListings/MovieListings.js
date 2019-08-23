import React from 'react';
import '../App/App.css';
import axios from 'axios';
import { API_KEY, PATH_BASE, PATH_MOVIE, PATH_IMAGE, PATH_PLAYING } from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class MovieListings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  componentDidMount = () =>{
    axios.get(`${PATH_BASE}${PATH_MOVIE}${PATH_PLAYING}?language=en-US&api_key=${API_KEY}`)
      .then(res => {
        const movies = res.data.results;
        this.setState({ movies });
    }).catch(error => this.setState({ 
      error, isLoading: false 
    }));
  }
  

  render = () => {
    const MovieList = this.state.movies
    //.filter(movie => 
    //   this.props.selectedGenres.some(genre=> movie.genre_ids.includes(genre))
    //  )
    .sort((a,b) => a.popularity > b.popularity)
    .map((movie, i ) => (
      <div className="movie" key={i}>
        <div className="starRating">
          <FontAwesomeIcon 
          className="star" 
          icon="star" />
          <span className="">{Math.round(movie.popularity)}</span>
        </div>
        <img src={`${PATH_IMAGE}` + movie.poster_path} alt="movie poster"/>
        <div className="item">
          <div className="description">
            <h3 className="title" alt="movie title">{movie.title}</h3>
          </div>
        </div>
      </div>
    ));
    return (
        <div className='movieCollection'>{MovieList}</div>
     );
  }
}