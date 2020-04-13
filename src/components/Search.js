import React from 'react';

// class Search extends React.Component {
//     constructor() {
//         super();
//         this.state = {};
//     }

const Search = (props) => {
        return (
            // <div>Search Component</div>

            <form className='search-form' onSubmit={props.handleSubmit}>
                <input
                    type='text'
                    value={props.typedString}
                    onChange={props.handleSearch}
                    name='search'
                    placeholder='Enter username'
                />
                <button type='submit'>Search</button>
            </form>
        )
}

export default Search;