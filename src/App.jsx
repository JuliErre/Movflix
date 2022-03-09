import { useState, useContext } from 'react'
import logo from './logo.svg'
import './App.css'
import HomeScreen from './components/HomeScreen'
import MovieListContextProvider from './context/MovieListContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import Navbar from './components/Navbar'
import { MovieListContext } from './context/MovieListContext'



function App() {
  return (
    <div className='bg-neutral-900'  >        
          
            <header>
              <Navbar/>
            </header>
          <Routes>
            <Route exact path="/" element={ <HomeScreen />} />
            <Route exact path="/search/:name" element={ <SearchPage />} />
          </Routes>
         
        
      
    </div>
  )
}

export default App
