import './SongList.css'


const SongList = ({ songs, onPlay, onLike}) => {
    return(
        <>
            <div className='song-list'>
                <ul>
                    {songs.map((song) => (
                        <div key={song.id} className='song-card'>
                            <img src={song.image} alt="song-image" className='song-image' />
                            <div className="song-info">
                                <h3>{song.name}</h3>
                                <p>{song.artist}</p>
                            </div>
                            <div className="song-action">
                                <button onClick={() => onPlay(song.preview_url)}>Play</button>
                                <button onClick={() => onLike(song.id)}>Like</button>
                            </div>
                        </div>
                    ))}
                </ul>

            </div>
        </>
    )
}

export default SongList