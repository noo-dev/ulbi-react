import {Routes, Route, Navigate} from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import SinglePost from '../pages/SinglePost'
import Login from '../pages/Login'
import { useContext } from 'react'
import { AuthContext } from '../context'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }
    return ( 
        isAuth
            ? 
            <Routes>
                <Route 
                    path="/about" 
                    element={<About />} 
                />
                <Route 
                    path="/posts" 
                    element={<Posts />} 
                />
                <Route 
                    path="/error" 
                    element={<Error />} 
                />
                <Route 
                    path="/posts/:id"
                    element={<SinglePost />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/posts" />}
                />
            </Routes>
            :
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/login" />}
                />
            </Routes>

    )
}

export default AppRouter