import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    return (
        <div className='search'>
            <input type="search" />
            <button><AiOutlineSearch /></button>
        </div>
    );
}

export default Search;