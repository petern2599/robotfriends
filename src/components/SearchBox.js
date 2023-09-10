import React from 'react';

class SearchBox extends React.Component {
    render(){
    return (
        <div>
            <input 
            className = 'pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots'
            onChange={this.props.searchChange}></input>
        </div>
    )
    }
}

export default SearchBox;