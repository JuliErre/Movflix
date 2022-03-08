import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';
import ApiUrls from '../ApiUrls';
import { MovieListContext } from '../context/MovieListContext';
import Loading from '../Loading.svg'


function Api({ title, category, isLargeImage, isMovieList }) {

  const [movies, setMovies] = useState([]);
  const { movieList } = useContext(MovieListContext)
  const [loading, setLoading] = useState(true)


  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  if (isMovieList == true) {

    useEffect(() => {
      setLoading(false)
      setMovies(movieList)


    }, [movieList])

  }



  else {
    useEffect(() => {
      let isUnmount = false;

      axios.get(ApiUrls.baseUrl + category, { cancelToken: source.token })
        .then(res => {
          if (!isUnmount) {
            setMovies(res.data.results)
          }
        })
        .catch(thrown => {
          if (axios.isCancel(thrown)) {
            console.log('request canceled', thrown.message)
          }
          else {
            console.log(thrown)
          }
        })
        .finally(setLoading(false))

      return () => {
        isUnmount = true
      }
    }, [])
  }



  return (
    <>
      {loading ?

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