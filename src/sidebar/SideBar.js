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
        genres.forEach(genre => {
          genre.isChecked = true
        })
        this.setState({ genres });
        this.props.setDefaultGenres(genres)
    }).catch(error => this.setState({ 
      error, isLoading: false 
    })); 
  }

  handleCheckBoxChange = (genre, e) => {
    e.persist()
    genre.isChecked = e.target.checked
    this.props.updateGenres(genre.id, e.target.checked)
  }

  selectAllBoxChange = (e) => {
    e.persist()
    this.state.genres.forEach(genre => {
      genre.isChecked = e.target.checked
    })
    this.setState({ genres: this.state.genres })
  }

  render = () => {
    const genreList = this.state.genres.map((genre, i) => (
      <label key={i}>
        <input type="checkbox" 
          checked={genre.isChecked}
          className="genreCheckbox"
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
            defaultChecked={true}
            className="selectAll"
            onChange={(e) => this.selectAllBoxChange(e)}
          >
          </input>  
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
