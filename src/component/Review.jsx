import React from 'react';

const Review = ({data}) => {
    const {name,occupation,image,review}=data;
    return (
        <div  className='container text-center p-10 bg-white'>
            <img className='w-20 h-20 rounded-full mx-auto my-6' src={image} alt="" />
            <h1 className='font-bold text-2xl'>{name}</h1>
            <h4 className='font-bold mb-6'>{occupation}</h4>
            <p>{review}</p>
        </div>
    );
};

export default Review;