import React,{useState,useEffect} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';
import ApiUrls from '../ApiUrls';


function Api({title,category, isLargeImage}) {
    
 
    const[movies, setMovies] = useState([]);
    

    useEffect(()=>{
        axios.get(ApiUrls.baseUrl+category)
            .then(res => setMovies(res.data.results))
            .catch(err =>console.log(err))
    },[])

  return (
    <div className='flex flex-col  my-5 max-w-full' >
      <h1 className='font-sans text-white text-4xl  font-semibold'>{title}</h1>
      <div className='flex flex-row gap-4 overflow-y-hidden  overflow-x-scroll scrollbar-hide p-5 max-w-full '> 
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} isLargeImage={isLargeImage}/> )
        }
        </div>
    </div>
  )
}

export default Api