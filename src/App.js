import React from 'react';
import './App.css';
import {MovieListings} from './MovieListings';
import {SideBar} from './SideBar';

function App() {
  return (
      <div className="App">
        <h1>Movies Showing Now</h1>
        <div className="movie-container">
          <SideBar></SideBar>
          <MovieListings> </MovieListings>
        </div>
      </div>
  );
}

export default App;
