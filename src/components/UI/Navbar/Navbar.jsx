import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/about">About Page</Link>
                <Link to="/posts">Posts Page</Link>
            </div>
        </div>
    )
}

export default Navbar;