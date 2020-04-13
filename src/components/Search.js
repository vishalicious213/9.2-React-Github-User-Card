import React from 'react';
import './Search.css';

const Search = (props) => {
        return (
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