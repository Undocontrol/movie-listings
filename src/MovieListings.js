import React from 'react';
import axios from 'axios'

export class MovieListings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      isLoading: true
    }
  }
  componentDidMount(){
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=d45466cfe15159bca4b549e8255e74d2&language=en-US&page=1`)
      .then(res => {
        const movies = res.data.results;
        this.setState({ movies });
        console.log("this is in the state",this.state.movies);
    }).catch(error => this.setState({ 
      error, isLoading: false 
    }));
  }
  render(){
    console.log(this.state.movies);
    const MovieList = this.state.movies.map((movie, i ) => (
      <div className="list" key={i} >
        <p>{movie.title}</p>
      </div>
    ));
    return (
        <div className='movies'>{MovieList}</div>
     );
  }
}