import React, { useEffect, useState, useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Detail from './Detail'

function MovieCard({ movie, isLargeImage },) {
  const baseUrlImages = 'https://image.tmdb.org/t/p/original'
  const detail = false
  const [onDetail, setOnDetail] = useState(detail)

  //const{visible,setVisible} = useContext(DataContext)



  // const resetState = (e) => {

  //   setTimeout(() => {
  //     setOnDetail(false);
  //   },10000)
  // }
  // const handleClick = () => {
  //   // setVisible((prevState) => !prevState)
  //   setTimeout(() => {
  //     setOnDetail((prevState) => !prevState)
  //   },100)

  //   resetState();



  // }


  const handleClick = () => {
    if (onDetail == true) setOnDetail(false)

    setTimeout(() => {
      setOnDetail(true)
    }, 100)

  }

  // const handleClick = () => {
  //   if(onDetail == true){
  //     setOnDetail(false)
  //   }
  //   setTimeout(() => {

  //   setOnDetail(true)

  //   },100)
  // }





  return (
    <div className='flex flex-wrap max-w-full'>
      <img onClick={handleClick} className='max-w-sm rounded-md cursor-pointer  hover:scale-105 duration-500' src={baseUrlImages + (isLargeImage ? movie.poster_path : movie.backdrop_path)} alt="" />
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