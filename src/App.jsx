import { useState } from 'react'
import Home from './pages/Home'
import RecommendationsPage from './pages/RecommendationsPage'
import NavBar from './components/NavBar'
import './App.css'


const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [likedSongs, setLikedSongs] = useState([])

  return (
    <> 
      <NavBar setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'recommendations' && ( <RecommendationsPage likedSongs={likedSongs} />)}
    </>
  )
}

export default App
