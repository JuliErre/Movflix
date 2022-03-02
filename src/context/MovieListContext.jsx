
import React,{createContext, useState} from 'react';

export const MovieListContext = createContext([]);

const MovieListContextProvider = ({children}) => {
    const [movieList, setMovieList] = useState([])
    const [searchMovies, setSearchMovies] = useState([])
    const [searchText, setSearchText] = useState('')
   

    function addToList (movie) {
      setMovieList([...movieList,movie])
     
    }


    function removeMovie  (movie)  {
      const index = movieList.findIndex((m) => m.id == movie.id)
      movieList.splice(index, 1)
      setMovieList([...movieList])
    }


  return (
  <MovieListContext.Provider
  value = {{
    movieList,
    setMovieList,
    addToList,
    removeMovie,
    searchMovies,
    setSearchMovies,
    searchText,
    setSearchText,
    }}    
  >
      {children}
  </MovieListContext.Provider>
  );
};

export default MovieListContextProvider;