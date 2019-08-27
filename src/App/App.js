import React from 'react';
import '../App/App.css';
import {MovieListings} from '../movieListings/MovieListings';
import {SideBar} from '../sidebar/SideBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar)

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        selectedGenres: []
      }
      this.state.selectedGenres.push(this.genreID);
  }

  setDefaultGenres = genres => {
    this.setState({selectedGenres: genres})
  }

  updateMovieListings = (genreID, add) => {
    if(add) {
      this.state.selectedGenres.push(genreID)
      this.setState({selectedGenres:  this.state.selectedGenres});
    } else {
      const filteredArray = this.state.selectedGenres.filter(item => item !== genreID)
      this.setState({selectedGenres: filteredArray});
    }
  }

  render = () => {
    return (
        <div className="App">
          <h1>Movies Showing Now</h1>
          <div className="movie-container">
            <SideBar 
              setDefaultGenres
              updateGenres={this.updateMovieListings}
            >
             </SideBar>
            <MovieListings selectedGenres={this.state.selectedGenres}> </MovieListings>
          </div>
        </div>
    );
  }
}

export default App;
