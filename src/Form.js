import React from 'react';

function SearchFrom(props) {

    const handleChange = (e) => {
        props.callbackFromParent(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.loadGif();
    }

    return (



        <form >
            <input name='searchValue' onChange={handleChange} type='text' placeholder='Search...'></input>
            <button onClick={handleSubmit}>Search</button>
        </form >
    )

}

export default SearchFrom;