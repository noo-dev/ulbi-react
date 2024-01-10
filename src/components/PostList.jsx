import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    return posts.length > 0
    ? (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) => 
                <PostItem remove={remove} number={index} post={post} key={post.id}  />
            )}
        </div>
    )
    : <h1>Not found any posts</h1>
}

export default PostList;