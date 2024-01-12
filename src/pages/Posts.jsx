import { useEffect, useRef, useState } from "react"
import '../styles/App.css'
import PostList from "../components/PostList"
import PostForm from "../components/PostForm"
import PostFilter from "../components/PostFilter"
import MyModal from "../components/UI/modal/MyModal"
import MyButton from "../components/UI/button/MyButton"
import { usePosts } from "../hooks/usePosts"
import PostService from "../API/PostService"
import Loader from "../components/UI/Loader/Loader"
import { useFetching } from "../hooks/useFetching"
import { getPageCount, getPagesArray } from "../utils/pages"
import Pagination from "../components/UI/pagination/Pagination"
import { useObserver } from "../hooks/useObserver"
import MySelect from "../components/UI/select/MySelect"

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef()

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPage, isPostsLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {   
    fetchPosts(limit, page)
  }, [page, limit])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])

    setModal(false)
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const changePage = (page) => {
    setPage(page)
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
        <MySelect 
          value={limit}
          onChange={value => setLimit(value)}
          defaultValue="Posts per page"
          options={[
            {value: 5, name:'5'},
            {value: 10, name:'10'},
            {value: 25, name:'25'},
            {value: -1, name: 'Show all'}
          ]}
        />
        {postError && 
          <h1>`Something went wrong, ${postError}`</h1>}
        {isPostsLoading &&
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div> 
        }
        <PostList posts={sortedAndSearchedPosts} title="Post Lisst" remove={removePost} />
        <div ref={lastElement} style={{height: 20, background: 'red'}}></div>
        
      <Pagination totalPage={totalPage} changePage={changePage} currentPage={page} />
    </div>
  )
} 

export default Posts