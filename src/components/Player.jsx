const Player =({ currentSong}) => {
    return(
        <div>
            <audio controls src={currentSong} />
        </div>
    )
}

export default Player