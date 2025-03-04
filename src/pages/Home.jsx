import { useState, useEffect } from 'react'
import Header from '../components/Header'
import SongList from '../components/SongList'
import Player from '../components/Player'
import ReadMyMind from '../assets/Read_your_mind.png'
import March from '../assets/MarchAm.png'
import Guess from '../assets/Guess.png'
import Peek from '../assets/Kendrick.png'
import Goose from '../assets/GooseBumps.png'
import Denial from '../assets/Denial.png'
import Billie from '../assets/Birds.png'
import Messy from '../assets/Messy.png'
import Yucky from '../assets/Yucky.png'


 
const mockSongs = [
    {
        id: 1,
        name: 'Read your Mind',
        image: ReadMyMind,
        artist: 'Sabrina Carpenter',
        preview_url: 'https://open.spotify.com/track/1RAeuvRyRzCweAK3jUT0ZW?si=220cb1c0d2cf46af',
    },
    {
        id: 2,
        name: 'March Am',
        image: March,
        artist: 'Rema',
        preview_url: 'https://open.spotify.com/track/59g8NvulzCJ2f9qjCu563T'
    },
    {
        id: 3,
        name: 'Guess',
        image: Guess,
        artist: 'Charli xcx',
        preview_url: 'https://open.spotify.com/track/3WOhcATHxK2SLNeP5W3v1v'
    },
    {
        id: 4,
        name: 'Peekaboo',
        image: Peek,
        artist: 'Kendrick Lamar',
        preview_url: 'https://open.spotify.com/track/2Uts1QFB4u2YNIMiqcb4de'
    },
    {
        id: 5,
        name: 'Denial Is A River',
        image: Denial,
        artist: 'Doechi',
        preview_url: 'https://open.spotify.com/track/1eTaznNW4Xxtx9za2SMTXB'
    },
    {
        id: 6,
        name: 'Luther',
        image: Peek,
        artist: 'Kendrick Lamar x SZA',
        preview_url: 'https://open.spotify.com/track/2CGNAOSuO1MEFCbBRgUzjd'
    },
    {
        id: 7,
        name: 'Goosebumps',
        image: Goose,
        artist: 'Travis Scott',
        preview_url: 'https://open.spotify.com/track/6gBFPUFcJLzWGx4lenP6h2'
    },
    {
        id: 8,
        name: 'Birds of A Feather',
        image: Billie,
        artist: 'Billie Eilish',
        preview_url: 'https://open.spotify.com/track/6dOtVTDdiauQNBQEDOtlAB'
    },
    {
        id: 9,
        name: 'Messy',
        image: Messy,
        artist: 'Lola Young',
        preview_url: 'https://open.spotify.com/track/3SKH53SPQbEnZR4cJPVaz2'
    },
    {
        id: 10,
        name: 'Yucky Blucky Fruitcake',
        image: Yucky,
        artist: 'Doechi',
        preview_url: 'https://open.spotify.com/track/1j3SdMJfeRJXycCp50boYE'
    }
]


const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [LikedSongs, setLikedSongs] = useState([])

  useEffect(() => {
    setSongs(mockSongs)
  }, [])

  const filteredSongs = songs.filter((song) => 
        song.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

  const handleLike = (songId) => {
    setLikedSongs((prevLikedSongs) => [...prevLikedSongs, songId])
    }


  return(
    <div>
        <Header onSearch={setSearchTerm} />
        <SongList 
            songs={filteredSongs}
            onPlay={setCurrentSong}
            onLike={handleLike}
        />
        <Player currentSong={currentSong} />
    </div>
  )
}

export default Home;