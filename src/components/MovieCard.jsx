import React from 'react'

function MovieCard({movie, isLargeImage},) {
    const baseUrlImages =  'https://image.tmdb.org/t/p/original'
    
  return (
    <>
        <img className='max-w-sm rounded-md cursor-pointer  hover:scale-105' src={baseUrlImages + (isLargeImage ? movie.poster_path : movie.backdrop_path) } alt="" />        

    </>
  )
}

export default MovieCard