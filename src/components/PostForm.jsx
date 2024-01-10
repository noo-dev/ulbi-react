import { useState } from "react"
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput"

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const submitHandler = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', value: ''})
    }


    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="Post title" 
            />
            <MyInput 
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder="Post description" 
            />
            <MyButton onClick={submitHandler}>Create Post</MyButton>
      </form>
    )
}

export default PostForm;