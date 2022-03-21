import React, { useState, useEffect, useContext, useRef } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';
import ApiUrls from '../ApiUrls';
import { MovieListContext } from '../context/MovieListContext';
import Loading from '../Loading.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


function Api({ title, category, isLargeImage, isMovieList }) {

  const [movies, setMovies] = useState([]);
  const { movieList } = useContext(MovieListContext)
  const [loading, setLoading] = useState(true)

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  const carousel = useRef(null)

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
        .finally(() => setLoading(false))

      return () => {
        isUnmount = true
      }
    }, [])
  }

  const rightArrow = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  const leftArrow = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }


  return (
    <>
      {loading ?

        <div>
          <img src={Loading} alt="" />
        </div>
        :
        <div className='flex flex-col  my-5 max-w-full relative scroll-smooth' >
          <div className='absolute top-1/3 mt-4  right-0 h-32 w-12  text-white z-10 bg-black/50  justify-center items-center hover:bg-black/80 duration-500 hidden lg:flex'>
            <button onClick={rightArrow}><FontAwesomeIcon icon={faAngleRight} className='text-4xl ' /></button>
          </div>
          <h1 className='font-sans text-white text-2xl lg:text-4xl font-semibold my-2'>{title}</h1>
          <div className='flex flex-row lg:gap-4 gap-2 overflow-y-hidden  overflow-x-scroll scrollbar-hide lg:py-5 max-w-full scroll-smooth w-full' ref={carousel}>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} isLargeImage={isLargeImage}  />)
            }
          </div>
          <div className='absolute top-1/3 mt-4 left-0 h-32 w-12  text-white z-10 bg-black/50 justify-center items-center hover:bg-black/80 duration-500 hidden lg:flex'>
            <button onClick={leftArrow}><FontAwesomeIcon icon={faAngleLeft} className='text-4xl' /></button>
          </div>
        </div>
      }
    </>
  )
}

export default Api