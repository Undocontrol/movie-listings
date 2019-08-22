import React from 'react';
import './App.css';
import axios from 'axios';
import { API_KEY, PATH_BASE, PATH_GENRE } from './api';

export class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      genres: [],
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

  render = () => {
    const Checkbox = props => (
      <input type="checkbox" {...props} />
    )
    const genreList = this.state.genres.map((genre, i ) => (
      <label key={i}>
        <Checkbox
          checked={this.state.checked}
          onChange={this.handleCheckboxChange}
        />
        <span>{genre.name}</span>
    </label>
    ));
  return (
    <div className="sidebar">
      <div className='seperator'>
          <div className='title'>Sort</div>
      </div>

      <ul className="menu sort">
          <li className="active"><a href="#">All</a></li>
          <li><a href="#">Year</a></li>
          <li><a href="#">Latest</a></li>
          <li><a href="#">Top</a></li>
          <li><a href="#">Rating</a></li>
      </ul>

      <div className='seperator'>
          <div className='title'>Genres</div>
      </div>
        <div className="menu">{genreList}</div>
    </div>
    );
  } 
}

export default SideBar;
