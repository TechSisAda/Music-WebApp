const Header = ({ onSearch }) => {
    return (
        <header>
            <h1>Music Recommendation App</h1>

            <input type="text" placeholder="Search for songs " onChange={(e) => onSearch(e.target.value)} />
        </header>
    )
}

export default Header