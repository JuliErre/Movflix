import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';
import ApiUrls from '../ApiUrls';
import { MovieListContext } from '../context/MovieListContext';


function Api({title,category, isLargeImage, isMovieList}) {
    
    const[movies, setMovies] = useState([]);
    const { movieList} = useContext(MovieListContext)
    
    if(isMovieList == true){
      
      useEffect(()=>{
        setMovies(movieList)
        
    },[movieList])
  
  }
     
      
    
    else{
    useEffect(()=>{
        axios.get(ApiUrls.baseUrl+category)
            .then(res => setMovies(res.data.results))
            .catch(err =>console.log(err))
    },[])
  }

  return (
    <div className='flex flex-col  my-5 max-w-full' >
      <h1 className='ml-5 font-sans text-white text-4xl font-semibold'>{title}</h1>
      <div className='flex flex-row gap-4 overflow-y-hidden  overflow-x-scroll scrollbar-hide p-5 max-w-full '> 
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} isLargeImage={isLargeImage}/> )
        }
        </div>
    </div>
  )
}

export default Api