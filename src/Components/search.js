import React from 'react';
import '../Search.css'
class Search extends React.Component {
    state = {
        term: ''
    };
   
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">              
                <form onSubmit={this.onFormSubmit} className="ui form">
                <lable>movie search</lable>
                    <div className="field">                        
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                            placeholder="search..." />
                        <button className="button">Search</button>
                    </div>
                </form>                
            </div>
        )
    }
}

export default Search;