import React from 'react';
import './App.css';
import axios from 'axios';
import { API_KEY, PATH_BASE, PATH_GENRE } from './api';

export class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      genres: [],
      selectedGenres: [],
      isLoading: true,
    }
  }
  
  componentDidMount = () =>{
    axios.get(`${PATH_BASE}${PATH_GENRE}?language=en-US&api_key=${API_KEY}`)
      .then(res => {
        const genres = res.data.genres;
        this.setState({ genres });
    }).catch(error => this.setState({ 
      error, isLoading: false 
    }));
  }

  handleCheckBoxChange = (genre, e) => {
    e.persist();
    e.target.checked ? this.state.selectedGenres.push(genre.id) 
    : this.state.selectedGenres.filter(item => item !== genre.id);
  }


  render = () => {
    const genreList = this.state.genres.map((genre, i) => (
      <label key={i}>
        <input type="checkbox" onChange={(e) => this.handleCheckBoxChange(genre, e)}/>
        <span>{genre.name}</span>
    </label>
    ));
  return (
    <div className="sidebar">
      <div className='seperator'>
            <div className='title'>Genres</div>
            <div className="menu">{genreList}</div>
      </div>
      <div className='seperator'>
            <div className='title'>Rating</div>
      </div>

    </div>
    );
  } 
}

export default SideBar;
