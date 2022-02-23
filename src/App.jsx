import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Row from './components/Row'
import ApiUrls from './ApiUrls'
import HeadPoster from './components/HeadPoster'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-neutral-900'  >
      <HeadPoster/>

      <div className='flex flex-col flex-wrap pl-10 max-w-full'>
        <Row key="1" title="Popular" category={ApiUrls.popularsMovies} isLargeImage />
        <Row key="2" title="Comedy" category={ApiUrls.comedyMovies} />
        <Row key="3" title="Romance" category={ApiUrls.romanceMovies} />
        <Row key="4" title="Family" category={ApiUrls.familyMovies} />
        <Row key="5" title="Action" category={ApiUrls.actionMovies} />
        <Row key="6" title="Drama" category={ApiUrls.dramaMovies} />
        <Row key="7" title="Horror" category={ApiUrls.horrorMovies} />

      </div>
    </div>
  )
}

export default App
