import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, body } = post;
    const exceptPost = (post, wordCount) => {
        const words = post.split(' ');
        const exceptedPost = words.slice(0, wordCount).join(' ');
        return exceptedPost;
    }

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }

    
    return (
        <div className="p-2 md:p-3 border rounded-xl flex flex-col justify-between">
            <div className="pb-4">
                <h3 className="text-xl capitalize font-medium text-white pb-1">{exceptPost(title, 4)}...</h3>
                <p className="">{exceptPost(body, 8)}...</p>
            </div>
            <button onClick={handleShowDetails} className="px-3 py-1 bg-orange-500 text-white rounded-md">Show Details</button>
            {/* <Link to={`/post/${id}`}>
                <button className="px-3 py-1 bg-orange-500 text-white rounded-md">Read More</button>
            </Link> */}
        </div>
    );
};

export default Post;