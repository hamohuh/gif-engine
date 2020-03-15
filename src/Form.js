import React from 'react';

function SearchFrom(props) {

    /**
     * this function sends the input value to our callback
     * once we change its value 
     */
    const handleChange = (e) => {
        props.callbackFromParent(e.target.value);
    }

    /**
     * This function load and gifs once we click on the Search buttons
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        props.loadGifs();
    }

    return (
        <form className='search-form' >
            <input className='search-input' name='searchValue' onChange={handleChange} type='text' placeholder='Search...'></input>
            <button className='search-button' onClick={handleSubmit}>Search</button>
        </form >
    )

}

export default SearchFrom;