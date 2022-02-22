import React,{useState,useEffect} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';


function Api() {
    const ApiKey = 'api_key=771f03b9c3d4bcaf131e7e4859fdb6f0';
    const baseUrl =  'https://api.themoviedb.org/3'
    const popularsMovies = '/discover/movie?sort_by=popularity.desc&'
    

    const[movies, setMovies] = useState([]);


    useEffect(()=>{
        axios.get(baseUrl + popularsMovies + ApiKey)
            .then(res => setMovies(res.data.results))
            .catch(console.log)
    },[])

  return (
    <div>
        {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
        }
    </div>
  )
}

export default Api