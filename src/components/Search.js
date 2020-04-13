import React from 'react';
import './Search.css';

// class Search extends React.Component {
//     constructor() {
//         super();
//         this.state = {};
//     }

const Search = (props) => {
        return (
            // <div>Search Component</div>

            <form className='search-form' onSubmit={props.handleSubmit}>
                <i className='fab fa-github' title='See another GitHub user'></i>
                <input
                    type='text'
                    value={props.typedString}
                    onChange={props.handleSearch}
                    name='search'
                    placeholder='Enter username'
                />
                <button className='search' type='submit'>Search</button>
            </form>
        )
}

export default Search;