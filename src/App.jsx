import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Api/>
    </div>
  )
}

export default App
