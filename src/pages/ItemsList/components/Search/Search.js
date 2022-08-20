import React from 'react'

const Search = ({ searchValue, handleSearch }) => {

    return (
        <div className='search'>
            <input
                type="search"
                value={searchValue}
                onChange={({ target }) => { handleSearch(target.value) }} />
        </div>
    );
}

export default Search;