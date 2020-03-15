/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function Body(props) {
    const { images } = props;
    return (
        <div>
            {images.map((img, i) => <img className='gif-img' key={i} src={img.images.original.url}></img>)}
        </div>
    )
}

export default Body;