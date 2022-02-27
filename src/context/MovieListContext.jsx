
import React,{createContext, useState} from 'react';

export const MovieListContext = createContext([]);

const MovieListContextProvider = ({children}) => {
    const [movieList, setMovieList] = useState([])
   

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
    }}    
  >
      {children}
  </MovieListContext.Provider>
  );
};

export default MovieListContextProvider;