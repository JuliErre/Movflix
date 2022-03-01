import React,{createContext,useState} from "react";


export const SearchMoviesContext = createContext([]);

const SearchMoviesContextProvider = ({children}) => {
    const [searchMovies, setSearchMovies] = useState([])


    return(
        <SearchMoviesContextProvider 
        value = {{
            searchMovies,
            setSearchMovies,
        }}
        >
            {children}
        </SearchMoviesContextProvider>
    )
}

export default SearchMoviesContextProvider;