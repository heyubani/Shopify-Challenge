import React from 'react';

class Nominated extends React.Component {

    state = {
        text:'naminated'
    }


    render() {
       const { nominatedList, removeNominated } = this.props;

        return (
            <div>
                {
                    nominatedList && nominatedList.map((movie, imdbID) => {
                        return (<div className="list" key={imdbID}>
                            {/* <li><img src={movie.Poster} alt="Img" /></li> */}
                            <li><h2>Title: {movie.Title}</h2></li>
                            <li><h3>Movie Year: {movie.Year}</h3></li>
                            <li><button className="button" onClick={()=> removeNominated(movie.imdbID)}>delete</button></li>
                            
                        </div>)
                    })
                }
            </div>
        )
    }
}

export default Nominated;