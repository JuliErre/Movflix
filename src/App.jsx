import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HomeScreen from './components/HomeScreen'
import MovieListContextProvider from './context/MovieListContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import Navbar from './components/Navbar'



function App() {
  return (
    <div className='bg-neutral-900'  >

      
        <MovieListContextProvider>
          <BrowserRouter >
            <header>
              <Navbar/>
            </header>
          <Routes>
            <Route exact path="/" element={ <HomeScreen />} />
            <Route exact path="/search/:name" element={ <SearchPage />} />
          </Routes>
         
          </BrowserRouter>
        </MovieListContextProvider>
      
    </div>
  )
}

export default App
