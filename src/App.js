import React from 'react'
import axios from 'axios';
import Search from '././Components/search';
import DisplayList from './Components/movieList'
import "./App.css";

class App extends React.Component {
 
  state = {
    movies: []
  }

  onSearchSubmit = (movieName) => {
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=6590609&type=movie&s=${movieName}`)
      .then(res => {
        this.setState({ movies: res.data.Search });
      })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <header className="header-text">Next Movie Award</header>
        <div className="searchBox">
        <Search onSubmit={this.onSearchSubmit} />
        </div>
          <div className="ui segment"> 
          <div className="header-tile">
            <div className="text">Movie List </div  >
            <div className="text">Nominated </div>
            </div>  
              <DisplayList movieList={this.state.movies} />
            </div>
        </div>
      )}
}

export default App