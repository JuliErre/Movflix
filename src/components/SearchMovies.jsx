import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ApiUrls from '../ApiUrls';
import { MovieListContext } from '../context/MovieListContext'
import MovieCard from './MovieCard'

function SearchMovies() {
  //const{searchMovies} = useContext(MovieListContext);
  const { name } = useParams()
  const [searchMovies, setSearchMovies] = useState([])

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    let isUnmount = false;

    axios.get(`${ApiUrls.baseUrl}${ApiUrls.searchMovie}${name}`, { cancelToken: source.token })
      .then(res => {
        if(!isUnmount){
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

      return () => {
        isUnmount = true
    }   

  }, [name])



  //useEffect(() => {
  //   if(searchText.length > 0) {
  //   axios.get(ApiUrls.baseUrl +ApiUrls.searchMovie+searchText)
  //     .then(res => {
  //       setSearchMovies([])
  //       setSearchMovies(res.data.results)
  //     })
  //     .catch(err => console.log(err))
  //   }
  //   else{
  //     setSearchMovies([])
  //   }
  // },[searchText] )
  return (
    <div className=' pt-28 mx-5 w-full h-full flex flex-row flex-wrap  gap-5 items-center justify-center '>
      {searchMovies.length > 0 ?
        searchMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)

        :
        <h3 className='text-bold text-white font-bold text-8xl text-center'>Not results...</h3>
      }
    </div>
  )
}



export default SearchMovies