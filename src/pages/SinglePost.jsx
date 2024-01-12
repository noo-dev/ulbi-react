import {useParams} from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import { useState, useEffect } from 'react'
import Loader from '../components/UI/Loader/Loader'

const SinglePost = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, postError] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1>You've been opened single post #{params.id}</h1>
            {postError &&
                <h1>Something went wrong {postError}</h1>
            }
            {isLoading
                ? <Loader />
                : <div>{post.id} {post.title}</div>
            }
        </div>
    )
}

export default SinglePost