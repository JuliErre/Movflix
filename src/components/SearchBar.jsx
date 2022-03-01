import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, {useState,useEffect, useContext} from 'react'
import ApiUrls from '../ApiUrls'
import { MovieListContext } from '../context/MovieListContext'
import { SearchMoviesContext } from '../context/SearchMoviesContext'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
    const [searchText, setSearchText] = useState('')
    const [movies , setMovies] = useState([])
    const [searchInput, setSearchInput] = useState(false)
    //const {searchMovies, setSearchMovies} = useContext(SearchMoviesContext) 
    const  {searchMovies, setSearchMovies} = useContext(MovieListContext)  
   
    useEffect(() => {
      if(searchText.length > 0) {
      axios.get(ApiUrls.baseUrl +ApiUrls.searchMovie+searchText)
        .then(res => {
          setSearchMovies([])
          setSearchMovies(res.data.results)
        })
        .catch(err => console.log(err))
      }
      else{
        setSearchMovies([])
      }
    },[searchText] )

    
    const handleClick = () =>{
      setSearchInput(prev => !prev)
    }

  return (
    <div className='fixed right-20 top-7 flex items-center justify-center transition-all'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white cursor-pointer text-2xl transition-all' onClick={ handleClick}/>
     { searchInput &&
     
        <input 
        type="text" 
        placeholder="search"
        onChange={event => {
            setSearchText(event.target.value);

        }}  
         className='rounded bg-black text-white  border-0 border-none py-1 px-3 ml-2 duration-500 transition-all'      
        />
      }

    </div>
  )
}

export default SearchBar