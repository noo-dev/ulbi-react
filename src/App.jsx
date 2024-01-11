import { useEffect, useState } from "react"
import './styles/App.css'
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"
import MyModal from "./components/UI/modal/MyModal"
import MyButton from "./components/UI/button/MyButton"
import { usePosts } from "./hooks/usePosts"
import PostService from "./API/PostService"
import Loader from "./components/UI/Loader/Loader"

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  useEffect(() => {   
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])

    setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoading(true)
    const fetchedPosts = await PostService.getAll()
    setPosts(fetchedPosts)
    setIsPostsLoading(false)
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }


  return (
    <div className="App">
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
        {isPostsLoading 
          ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div> 
          : <PostList posts={sortedAndSearchedPosts} title="Post Lisst" remove={removePost} /> 
        }
    </div>
  )
} 

export default App
