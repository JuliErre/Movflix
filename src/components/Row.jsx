import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';
import ApiUrls from '../ApiUrls';
import { MovieListContext } from '../context/MovieListContext';
import Loading from '../Loading.svg'


function Api({ title, category, isLargeImage, isMovieList }) {

  const [movies, setMovies] = useState([]);
  const { movieList } = useContext(MovieListContext)
  const [loading, setLoading] = useState(false)

  if (isMovieList == true) {
    
    useEffect(() => {
      setLoading(true)
      setMovies(movieList)
      

    }, [movieList])

  }



  else {
    useEffect(() => {
      axios.get(ApiUrls.baseUrl + category)
        .then(res => setMovies(res.data.results))
        .catch(err => console.log(err))
        .finally(setLoading(true))
    }, [])
  }

  return (
    <>
      {!loading ?

        <div>
          <img src={Loading} alt="" />
        </div>
            :
        <div className='flex flex-col  my-5 max-w-full' >
          <h1 className='ml-5 font-sans text-white text-4xl font-semibold'>{title}</h1>
          <div className='flex flex-row gap-4 overflow-y-hidden  overflow-x-scroll scrollbar-hide p-5 max-w-full '>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} isLargeImage={isLargeImage} />)
            }
          </div>
          
        </div>
      }
    </>
  )
}

export default Api