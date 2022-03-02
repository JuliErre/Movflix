import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import MovieListContextProvider from './context/MovieListContext'

ReactDOM.render(
  <React.StrictMode>
    <MovieListContextProvider>
      <App />
    </MovieListContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
