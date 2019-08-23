import React from 'react';
import '../sidebar/sidebar.css';
import axios from 'axios';
import { API_KEY, PATH_BASE, PATH_GENRE } from '../api';

export class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      genres: [],
      isLoading: true,
    }
  }
  
  componentDidMount = () => {
    axios.get(`${PATH_BASE}${PATH_GENRE}?language=en-US&api_key=${API_KEY}`)
      .then(res => {
        const genres = res.data.genres;
        this.setState({ genres });
    }).catch(error => this.setState({ 
      error, isLoading: false 
    })); 
  }

  handleCheckBoxChange = (genre, e) => {
    this.props.updateGenres(genre.id, e.target.checked)
  }

  render = () => {
    const genreList = this.state.genres.map((genre, i) => (
      <label key={i}>
        <input type="checkbox" 
        allowSelectAll={true} 
        onChange={(e) => this.handleCheckBoxChange(genre, e)}/>
        <span>{genre.name}</span>
    </label>
    ));
    return (
      <div className="sidebar">
        <div className='seperator'>
          <div className='title'>Genres</div>
          <label><input 
          type="checkbox"
          className="selectAll"></input>
          Select All
          </label>
          <div className="menu">{genreList}</div>
        </div>
        <div className='seperator'>
              <div className='title'>Rating</div>
        </div>
      </div>
    );
  } 
}
