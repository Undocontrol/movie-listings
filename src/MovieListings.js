import React from 'react';
import './App.css';
import axios from 'axios'

export class MovieListings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    }
  }
  componentDidMount(){
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=d45466cfe15159bca4b549e8255e74d2&language=en-US&page=1`)
      .then(res => {
        const movies = res.data.results;
        this.setState({ movies });
    }).catch(error => this.setState({ 
      error, isLoading: false 
    }));
  }
  render(){
    console.log(this.state.movies);
    const MovieList = this.state.movies.map((movie, i ) => (
      <div className="movie" key={i}>
        <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt="movie poster"/>
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