import {useParams} from 'react-router-dom'

const SinglePost = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>You've been opened single post #{params.id}</h1>
        </div>
    )
}

export default SinglePost