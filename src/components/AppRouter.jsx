import {Routes, Route, Navigate} from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import SinglePost from '../pages/SinglePost'

const AppRouter = () => {
    return (
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
                element={<Navigate to="/error" />}
            />
        </Routes>
    )
}

export default AppRouter