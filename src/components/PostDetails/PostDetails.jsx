import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa6";

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    const handleGoNext = () => {
        const nextPost = id + 1;
        navigate(`/post/${nextPost}`);
    }
    return (
        <div className='w-full lg:w-1/2 mx-auto px-4 md:px-8'>
            <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-white pb-5 capitalize'>{title}</h1>
            <p className=''>{body}</p>

            <div className='mt-5 flex items-center justify-between'>
                <button onClick={handleGoBack} className='btn btn-success'><FaArrowLeft /> Back</button>
                <button onClick={handleGoNext} className='btn btn-success'><FaArrowRight  /> Next</button>
            </div>
        </div>
    );
};

export default PostDetails;