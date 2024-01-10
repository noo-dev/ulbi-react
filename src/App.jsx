import { useState } from "react"
import './styles/App.css'
import PostItem from "./components/PostItem"
import PostList from "./components/PostList"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: 'Description 1'},
    {id: 2, title: 'JavaScript 2', body: 'Description 2'},
    {id: 3, title: 'JavaScript 3', body: 'Description 3'},
  ])
  return (
    <div className="App">
      <form>
        {/* PLACE CUSTOM UI LIB ELEMENTS (INPUT BUTTON HERE) */}
      </form>
      <PostList posts={posts} title="Post Lisst" />
    </div>
  )
} 

export default App
