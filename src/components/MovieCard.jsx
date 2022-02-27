import React, { useEffect, useState, useContext } from 'react'
import { MovieListContext } from '../context/MovieListContext'
import Detail from './Detail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

function MovieCard({ movie, isLargeImage },) {
  const baseUrlImages = 'https://image.tmdb.org/t/p/original'
  const detail = false
  const [onDetail, setOnDetail] = useState(detail)
  const { addToList, removeMovie, movieList } = useContext(MovieListContext)

  const handleClick = () => {
    if (onDetail == true) setOnDetail(false)

    setTimeout(() => {
      setOnDetail(true)
    }, 100)
  }



  return (
    <div className='flex flex-wrap flex-col max-w-full relative group  '>
      <div className='hover:scale-105 duration-500'>
      <img onClick={handleClick} className='max-w-sm rounded-md cursor-pointer  ' src={baseUrlImages + (isLargeImage ? movie.poster_path : movie.backdrop_path)} alt="" />
      <div className='hidden group-hover:flex justify-center items-center left-4 top-4 text-2xl absolute rounded-full w-14 h-14 bg-black/50 border-2 border-white/40 hover:border-white duration-300 group ' >
        {movieList.find(m => m.id == movie.id) ?
          <>
            <FontAwesomeIcon className='text-white cursor-pointer group' icon={faCheck} onClick={() => removeMovie(movie)} />
          </>
          :
          <>
            <FontAwesomeIcon className='text-white cursor-pointer group relative' icon={faPlus} onClick={() => addToList(movie)} />

          </>
        }
      </div>
      </div>

      <div>
        {onDetail ? <Detail movie={movie} key={movie.id} handleVisible={onDetail} />
          :
          <></>
        }
      </div>
    </div>
  )
}



export default MovieCard