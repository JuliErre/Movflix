import React from 'react'

function MovieCard({movie, isLargeImage},) {
    const baseUrlImages =  'https://image.tmdb.org/t/p/original'
    
  return (
    <div className='flex flex-wrap max-w-full'>
        <img className='max-w-sm rounded-md cursor-pointer  hover:scale-105 duration-500' src={baseUrlImages + (isLargeImage ? movie.poster_path : movie.backdrop_path) } alt="" />        

    </div>
  )
}

export default MovieCard