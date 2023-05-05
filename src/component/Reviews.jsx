import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch("https://maxi-cook-server-nhhasib.vercel.app/reviews")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='my-20 py-10 bg-orange-400'>
            <h1 className='text-black font-bold text-4xl text-center my-6'>Reviews</h1>
            <div className='grid md:grid-cols-3 gap-6 w-4/5 mx-auto'>
                {
                reviews.map(review=><Review key={review.id} data={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;