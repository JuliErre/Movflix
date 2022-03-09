import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ApiUrls from '../ApiUrls'
import Detail from './Detail'

function HeadPoster() {
    const [movie, setMovie] = useState([])

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    //) 
    useEffect(() => {
        let isUnmount = false;

        axios.get(ApiUrls.baseUrl + ApiUrls.actionMovies, { cancelToken: source.token })
            .then(res => {
                if (!isUnmount){
                setMovie(res.data.results[(Math.floor(Math.random() * res.data.results.length - 1))])
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
    }, [])

    const [onDetail, setOnDetail] = useState(false)

    const handleClick = () => {
        if (onDetail == true) setOnDetail(false)

        setTimeout(() => {
            let isUnmount = false;
            if (!isUnmount){
            setOnDetail(true)
            }

            return () => {
                isUnmount = true
            }   
        }, 100)
    }

    return (
        <>
        { movie &&
        <div className='relative h-screen text-white flex items-center  '
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path && movie.backdrop_path}")`,
                backgroundPosition: "center center",


            }}>
            <div className='ml-12 mt-52  flex flex-col justify-center max-w-6xl gap-4 '>
                <h1 className='text-7xl text-left font-bold'>{movie.title}</h1>
                <h3 className='text-2xl'>{movie.overview}</h3>
                <div className='flex gap-3 '>
                    <button className='p-5 font-semibold text-4xl rounded-lg bg-black/50 duration-300 hover:bg-slate-100 hover:text-black' > Play </button>
                    <button onClick={handleClick} className='p-5 font-semibold text-4xl rounded-lg bg-black/50 duration-300  hover:bg-slate-100 hover:text-black' >  More details</button>
                </div>
            </div>
            {onDetail && <Detail movie={movie} key={movie.id} handleVisible={onDetail} />}

        </div>
        }
        </>
    )
}

export default HeadPoster