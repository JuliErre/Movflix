import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HomeScreen from './components/HomeScreen'
import MovieListContextProvider from './context/MovieListContext'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-neutral-900'  >
      <MovieListContextProvider> 
     <HomeScreen/>
     </MovieListContextProvider>
    </div>
  )
}

export default App
