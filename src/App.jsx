import { useMemo, useState } from "react"
import './styles/App.css'
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"
import MyModal from "./components/UI/modal/MyModal"
import MyButton from "./components/UI/button/MyButton"
import { usePosts } from "./hooks/usePosts"
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])

    setModal(false)
  }

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }


  return (
    <div className="App">
      <button onClick={fetchPosts}>Get Posts</button>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
        <hr style={{margin:'15px 0' }} />
        <PostFilter 
          filter={filter} 
          setFilter={setFilter} 
        />
        <PostList posts={sortedAndSearchedPosts} title="Post Lisst" remove={removePost} /> 
    </div>
  )
} 

export default App
