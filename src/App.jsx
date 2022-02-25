import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HomeScreen from './components/HomeScreen'
import DataContextProvider from './context/DataContext'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-neutral-900'  >
      <DataContextProvider> 
     <HomeScreen/>
     </DataContextProvider>
    </div>
  )
}

export default App
