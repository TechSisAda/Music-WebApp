const Recommendations = ({ likedSongs, songs}) => {

    const likedSongsIds = likedSongs
    const likedArtists = songs
    .filter((song) => likedSongsIds.includes(song.id))
    .map((song) => song.artist)


    const recommendedSongs = songs.filter((song) => 
        likedArtists.includes(song.artist)
     )
    
    return(
        <div>
            <h2>Recommended Songs For You</h2>
            <ul>
                {recommendedSongs.map((song) => (
                    <li 
                        key={song.id}>{song.name} - {song.artist}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recommendations