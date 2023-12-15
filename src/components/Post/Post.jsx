

const Post = ({post}) => {
    const { id, title } = post;
    return (
        <div>
            <h3 className="text-2xl capitalize">{title}</h3>
        </div>
    );
};

export default Post;