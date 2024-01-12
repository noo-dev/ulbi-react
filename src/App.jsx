import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import About from "./pages/About"
import Posts from "./pages/Posts"
import Error from './pages/Error'
import Navbar from "./components/UI/Navbar/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
          path="*"
          element={<Navigate to="/error" />}
        />
      </Routes>
    </BrowserRouter>
  )
} 

export default App