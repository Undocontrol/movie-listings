import React from 'react';
import './App.css';
import {MovieListings} from './MovieListings';
import {SideBar} from './SideBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar)

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        movieGenre: [],
    }
  }
  updateMovieListings = (movieGenre) => {
    this.setState({ movieGenre: movieGenre })
   }

  render = () => {
    return (
        <div className="App">
          <h1>Movies Showing Now</h1>
          <div className="movie-container">
            <SideBar movieGenre={this.updateMovieListings}></SideBar>
            <MovieListings movieGenre={this.state.movieGenre}> </MovieListings>
          </div>
        </div>
    );
  }
}

export default App;
