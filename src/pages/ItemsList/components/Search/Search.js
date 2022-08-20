import React from 'react'

const Search = ({ searchValue, handleSearch }) => {

    return (
        <div className='search'>
            <input
                type="search"
                placeholder='search'
                value={searchValue}
                onChange={({ target }) => { handleSearch(target.value) }} />
        </div>
    );
}

export default Search;