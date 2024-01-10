import { useMemo, useState } from "react"
import './styles/App.css'
import PostList from "./components/PostList"
import PostForm from "./components/PostForm"
import MySelect from "./components/UI/select/MySelect"
import MyInput from "./components/UI/input/MyInput"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aa 1', body: 'yy 1'},
    {id: 2, title: 'cc 2', body: 'xx 2'},
    {id: 3, title: 'bb 3', body: 'zz 3'},
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('Get sorted posts was called')
    return selectedSort 
      ? [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])) 
      : posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [sortedPosts, searchTerm])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }


  const searchPosts = (term) => {
    setSearchTerm(term)
    // setPosts(posts.filter(post => post.title.includes(term)))
  }

  const sortPosts = (option) => {
    setSelectedSort(option)
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
        <hr style={{margin:'15px 0' }} />
      <div>
        <MyInput 
          placeholder="Search a post"
          value={searchTerm}
          onChange={e => searchPosts(e.target.value)}
        />
        <MySelect 
          value={selectedSort}
          onChange={option => sortPosts(option)}
          defaultValue="sort by" 
          options={[
            {value: 'title', name: 'Sort by title'},
            {value: 'body', name: 'Sort by description'},
          ]} 
        /> 
      </div>
      {sortedAndSearchedPosts.length > 0
        ? <PostList posts={sortedAndSearchedPosts} title="Post Lisst" remove={removePost} />
        : <h1 style={{textAlign: 'center'}}>There are any posts</h1>
      }
      
    </div>
  )
} 

export default App
