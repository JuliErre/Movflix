import React, { useContext } from 'react'
import { MovieListContext } from '../context/MovieListContext'
import MovieCard from './MovieCard'

function SearchMovies() {
    const{searchMovies} = useContext(MovieListContext);
  return (
    <div className=' pt-28 mx-5 w-full h-full flex flex-row flex-wrap  gap-5 items-center justify-center '>
        {searchMovies.length > 0 ? 
        searchMovies.map(movie => <MovieCard key={movie.id} movie={movie}/>)    
        
        :
        <h3 className='text-bold text-white font-bold text-8xl text-center'>Not results...</h3>
        }
    </div>
  )
}



export default SearchMovies