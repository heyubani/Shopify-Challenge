import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toast'
import Search from '././Components/search';
import DisplayList from './Components/movieList'

class App extends React.Component {
 
  state = {
    movies: []
  }

  onSearchSubmit = (movieName) => {
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=6590609&type=movie&s=${movieName}`)
      .then(res => {
        this.setState({ movies: res.data.Search });
      })
      .catch( err => toast.error(err.message));
  }

  
  render() {

    const success = () => toast.success('Message sent successfully!')
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <h1>Next Movie Award</h1>
        <div className="searchBox">
        <Search onSubmit={this.onSearchSubmit} />
        </div>
          <div className="ui segment">   
              <DisplayList movieList={this.state.movies} />
            </div>
        </div>
      )}
}

export default App