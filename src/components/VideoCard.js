import React from 'react'
import TextTruncate from "react-text-truncate";
import '../css/VideoCard.css'

const base_url = "https://image.tmdb.org/t/p/original";

function VideoCard({movie}) {
    return (
        <div className='videocard'>
            <img src={`${base_url}${movie.backdrop_path}`} alt="" />
            
            <TextTruncate
                line={3}
                element="p"
                truncateText="  ..."
                text={movie.overview}
            />
            <h2>{movie.title}</h2>
        </div>
    )
}

export default VideoCard
