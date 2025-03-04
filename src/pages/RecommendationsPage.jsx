import Recommendations from "../components/Recommendations";
import {useState, useEffect} from 'react'


const mockSongs = [
    {
        id: 1,
        name: 'Read your Mind',
        artist: 'Sabrina Carpenter',
        preview_url: 'https://open.spotify.com/track/1RAeuvRyRzCweAK3jUT0ZW?si=220cb1c0d2cf46af'
    },
    {
        id: 2,
        name: 'March Am',
        artist: 'Rema',
        preview_url: 'https://open.spotify.com/track/59g8NvulzCJ2f9qjCu563T'
    },
    {
        id: 3,
        name: 'Guess',
        artist: 'Charli xcx',
        preview_url: 'https://open.spotify.com/track/3WOhcATHxK2SLNeP5W3v1v'
    },
    {
        id: 4,
        name: 'Peekaboo',
        artist: 'Kendrick Lamar',
        preview_url: 'https://open.spotify.com/track/2Uts1QFB4u2YNIMiqcb4de'
    },
    {
        id: 5,
        name: 'Luther',
        artist: 'Kendrick Lamar x SZA',
        preview_url: 'https://open.spotify.com/track/2CGNAOSuO1MEFCbBRgUzjd'
    },
    {
        id: 6,
        name: 'Goosebumps',
        artist: 'Travis Scott',
        preview_url: 'https://open.spotify.com/track/6gBFPUFcJLzWGx4lenP6h2'
    },
    {
        id: 7,
        name: 'Denial Is A River',
        artist: 'Doechi',
        preview_url: 'https://open.spotify.com/track/1eTaznNW4Xxtx9za2SMTXB'
    },
    {
        id: 8,
        name: 'Birds of A Feather',
        artist: 'Billie Eilish',
        preview_url: 'https://open.spotify.com/track/6dOtVTDdiauQNBQEDOtlAB'
    },
    {
        id: 9,
        name: 'Messy',
        artist: 'Lola Young',
        preview_url: 'https://open.spotify.com/track/3SKH53SPQbEnZR4cJPVaz2'
    },
    {
        id: 10,
        name: 'Yucky Blucky Fruitcake',
        artist: 'Doechi',
        preview_url: 'https://open.spotify.com/track/1j3SdMJfeRJXycCp50boYE'
    },
]

const RecommendationsPage = ({likedSongs} ) => {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        setSongs(mockSongs)
    }, [])

    return (
        <div>

            <Recommendations likedSongs={likedSongs} songs={songs} />
        </div>
    )
}


export default RecommendationsPage