import React from 'react'
import '../movieList.css';
import Nominated from './nominatedList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 

class MovieList extends React.Component {

    state = {
        nominatedList: []
    }

    addToNominated = movie => {
        this.setState({ nominatedList: [movie, ...this.state.nominatedList]})
        this.nominatedList(...this.state.nominatedList )
    }

    removeNominated = (id) => {
        const removeList = this.state.nominatedList.filter(nominated => {
            return nominated.imdbID !== id
        })
        this.setState({
            nominatedList: removeList
        })
    }
     
    nominatedList  = (data) => localStorage.setItem('nominatedList', JSON.stringify(data))
     
    render() {
        console.log(Nominated)
        const { nominatedList } = this.state
        return (
            <div className="movieList container">
                <div className="movieList-Sub">
                    <div className="movie-list2 ">
                        {
                            this.props.movieList && this.props.movieList.map((movie, imdbID) => {
                                return (<div className="list" key={imdbID}>
                                    <li><img className="img" src={movie.Poster} alt="Img" /></li>
                                    <li><span><h4>Title:</h4>{movie.Title}</span></li>
                                    <li><h3>Movie Year: {movie.Year}</h3></li>
                                    <li><button
                                        className="button"
                                        onClick={() => {
                                            this.addToNominated(movie)
          
                                            if (nominatedList.length === 4) {
                                                toast.success('5 movies successfully nominated')
                                            } else if(nominatedList.length <= 4){
                                                toast.warning('select 5 movies')
                                            } else
                                                return toast.error('movies already selected')
                                                
                                            
                                        }}
                                        disabled={nominatedList.find(n => n.imdbID === movie.imdbID)}>
                                        {nominatedList.find(n => n.imdbID === movie.imdbID) ? 'nominated' : 'nominate'}
                                    </button></li>

                                </div>)
                            })
                        }
                    </div>
                </div><hr style={{ color:"000", height:'auto', border:'.px solid gray',opacity:'.2'}}/>
                <div className="nomList">
                    <Nominated 
                    nominatedList={this.state.nominatedList} 
                    removeNominated={this.removeNominated}
                     />
                </div>
                <ToastContainer />
            </div>
        )
    }
}

export default MovieList