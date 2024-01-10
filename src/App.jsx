import { useMemo, useState } from "react"
import './styles/App.css'
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"
import MyModal from "./components/UI/modal/MyModal"
import MyButton from "./components/UI/button/MyButton"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aa 1', body: 'yy 1'},
    {id: 2, title: 'cc 2', body: 'xx 2'},
    {id: 3, title: 'bb 3', body: 'zz 3'},
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log('Get sorted posts was called')
    return filter.sort 
      ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])) 
      : posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [sortedPosts, filter.query])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false )
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
        <PostList posts={sortedAndSearchedPosts} title="Post Lisst" remove={removePost} /> 
    </div>
  )
} 

export default App
