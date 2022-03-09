import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ApiUrls from '../ApiUrls'
import { useOutsideAlerter } from '../hooks/outsideAlert';
import ReactPlayer from 'react-player'

function Detail({ movie, handleVisible }) {
    const [movieTrailer, setMovieTrailer] = useState([]);
    const [actors, setActors] = useState([]);
    const { visible, setVisible, ref } = useOutsideAlerter(false)



    useEffect(() => {
        axios.get(`${ApiUrls.baseUrl}/movie/${movie.id}/videos?api_key=771f03b9c3d4bcaf131e7e4859fdb6f0`)
            .then(res => res.data.results.length > 0 && setMovieTrailer(res.data.results.find(video => video.name.toLowerCase().includes('trailer'))))
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        axios.get(`${ApiUrls.baseUrl}/movie/${movie.id}/credits?api_key=771f03b9c3d4bcaf131e7e4859fdb6f0`)
            .then(res => setActors(res.data.cast.slice(0, 3)))
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        if (handleVisible == true) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }, [])


    return (
        <>
            {visible &&
                <div key={movie.id} className={`fixed z-50 duration-500  w-full h-full bg-black/50 top-0 left-0 flex flex-col items-center justify-center  `} >
                    <div ref={ref} className='flex flex-col items-center justify-center bg-neutral-800 rounded-xl overflow-hidden pb-20 shadow-xl shadow-black' >
                        <div className='flex overflow-hidden  pointer-events-none ' >
                            <ReactPlayer width="854px" height="480px" controls={false} playing={true} loop={true} url={`https://www.youtube.com/embed/${movieTrailer.key}`} config={{ youtube: { playerVars: { disablekb: 1 } } }} />
                        </div>
                        <div className='flex flex-col  justify-center max-w-3xl gap-5 mt-5' >
                            <h1 className='text-5xl text-white font-bold text-left '>{movie.title}</h1>
                            <h3 className='text-xl text-white semi-bold text-left'>{movie.overview}</h3>
                            <div className='flex flex-row justify-between gap-5'>
                                <h5 className='text-green-400 text-lg font-bold'>Average calification  {movie.vote_average}</h5>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex flex-row  gap-1'>
                                        <span className='text-gray-600 font-semi-bold'>Release Date:</span>
                                        <h5 className='text-white text-l font-semi-bold'> {movie.release_date}</h5>
                                    </div>
                                    <div className='flex flex-row gap-1'>
                                        <span className='text-gray-600 font-semi-bold'>Actors:</span>
                                        <h5 className='text-white text-l font-thin'> {actors.map(actor => actor.name + ', ')} </h5>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            }
        </>

    )
}


export default Detail 