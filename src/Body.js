/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function Body(props) {
    const { images } = props;

    if (images.length === 0) {
        return (<div className='images'>
            <p className='no-results'>There are no results to show, please start your search.</p>
        </div>)
    } else {
        return (
            <div className='images'>
                {images.map((img, i) => <img className='gif-img' key={i} src={img.images.original.url}></img>)}
            </div>
        )
    }


}

export default Body;