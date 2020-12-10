import React from 'react'

function VideoCard({movie}) {
    return (
        <div className='videocard'>
            <img src="" alt="" />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
        </div>
    )
}

export default VideoCard
