import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ApiUrls from '../ApiUrls';
import MovieCard from './MovieCard'
import Loading from "../Loading.svg"

function SearchMovies() {
  let { name } = useParams()
  const [searchMovies, setSearchMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    let isUnmount = false;

    axios.get(`${ApiUrls.baseUrl}${ApiUrls.searchMovie}${name}`, { cancelToken: source.token })
      .then(res => {
        if (!isUnmount) {
          setSearchMovies(res.data.results)
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
      .finally(() => setLoading(false))

    return () => {
      isUnmount = true
    }

  }, [name])

  return (
    <>
      {loading ?
        <img src={Loading} alt="" />
        :
        <div className=' pt-28 mx-5 w-full h-full flex flex-row flex-wrap  gap-5 items-center justify-center '>
          {searchMovies.length > 0 ?
            searchMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)

            :
            <h3 className='text-bold text-white font-bold text-8xl text-center'>Not results...</h3>
          }
        </div>


      }
    </>
  )
}



export default SearchMovies