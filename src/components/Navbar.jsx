import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="logo">Devogel</h1>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Birdpedia</a>
            <a href="#">Contact</a>
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default Navbar
