import { useParams } from "react-router-dom";

const Post = () => {
    const { postid } = useParams();

    return (
        <div className="container">
            <h1 className="text-center">This is Post Component</h1>
            <hr />
            <h2>Post ID = {postid}</h2>
        </div>
    )
}

export default Post;