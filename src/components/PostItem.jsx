import MyButton from "./UI/button/MyButton"
import {useNavigate} from 'react-router-dom'


const PostItem = ({post, remove, number}) => {
    const router = useNavigate()
    const removeHandler = () => {
        remove(post.id)
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton
                    onClick={() => router(`/posts/${post.id}`)}
                >
                    Open
                </MyButton>
                <MyButton onClick={removeHandler}>Delete</MyButton>
            </div>
        </div>
    )
}

export default PostItem