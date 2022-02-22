import React from 'react'

function MovieCard({movie}) {
    const baseUrlImages =  'https://image.tmdb.org/t/p/w500'
  return (
    <div >
        <img src={baseUrlImages + movie.poster_path} alt="" />
        <h1 className='text-red-700 text-3xl'>{movie.title}</h1>
        
      
        

    </div>
  )
}

export default MovieCard