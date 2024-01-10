import MyButton from "./UI/button/MyButton"


const PostItem = ({post, remove, number}) => {

    const removeHandler = () => {
        remove(post.id)
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>{number + 1}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={removeHandler}>Delete</MyButton>
            </div>
        </div>
    )
}

export default PostItem