 const NavBar = ({setCurrentPage}) => {
    return(
        <nav>
            <button onClick={() => setCurrentPage('home')}>Home</button>
            <button onClick={() => setCurrentPage('recommendations')}>Recommendations</button>

        </nav>
    )
 }

 export default NavBar