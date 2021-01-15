import React from 'react'
import '../movieList.css';
import Nominated from './nominatedList'

class MovieList extends React.Component {

    state = {
        nominatedList: []
    }

    addToNominated = movie => {
        this.setState({ nominatedList: [movie, ...this.state.nominatedList]})

    }


    removeNominated = (id) => {
        const removeList = this.state.nominatedList.filter(nominated => {
            return nominated.imdbID !== id
        })
        this.setState({
            nominatedList: removeList
        })
    }

    render() {
        const { nominatedList } = this.state
        return (
            <div className="movieList container">
                <div className="movieList-Sub">
                    <h3>Movie List:</h3>
                        <div>
                            {
                                this.props.movieList && this.props.movieList.map((movie, imdbID) => {
                                    return (<div className="list" key={imdbID}>
                                        <li><img className="img" src={movie.Poster} alt="Img" /></li>
                                        <li><h2>Title: {movie.Title}</h2></li>
                                        <li><h3>Movie Year: {movie.Year}</h3></li>
                                        <li><button
                                            className="button"
                                            onClick={() => this.addToNominated(movie)}
                                            disabled={nominatedList.find(n => n.imdbID === movie.imdbID)}>
                                            {nominatedList.find(n => n.imdbID === movie.imdbID) ? 'nominated' : 'nominate'}
                                        </button></li>

                                    </div>)
                                
                                })
                            }
                        </div>
                </div>
                <div className="nomList">
                    <h1>Nominated</h1>
                    <Nominated nominatedList={this.state.nominatedList} removeNominated={this.removeNominated} />
                </div>

            </div>
        )
    }
}

export default MovieList