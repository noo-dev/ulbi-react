import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            {isAuth &&
                <MyButton onClick={logout}>
                    Logout
                </MyButton>
            }
            <div className="navbar__links">
                <Link to="/about">About Page</Link>
                <Link to="/posts">Posts Page</Link>
            </div>
        </div>
    )
}

export default Navbar;