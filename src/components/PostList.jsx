import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const PostList = ({posts, title, remove}) => {
    return posts.length > 0
    ? (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
            {posts.map((post, index) =>
                <CSSTransition
                    timeout={500}
                    key={post.id}
                    classNames={"post"}
                >
                    <PostItem remove={remove} number={index} post={post}   />
                </CSSTransition>
            )}
            </TransitionGroup>
        </div>
    )
    : <h1>Not found any posts</h1>
}

export default PostList;