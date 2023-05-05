import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Recipe from './Recipe';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const {id} = useParams();
   
    const [chef, setChef] = useState([]);

    useEffect(()=>{
        fetch(`https://maxi-cook-server-nhhasib.vercel.app/recipe/${id}`)
        .then(res=>res.json())
        .then(data=>setChef(data))
    },[])
    
    const {image,name,recipes,recipesNum,experience,description}= chef;
    console.log(recipes);
    
    return (
        <div className='w-11/12 mx-auto my-6 pb-6'>
            <div className='img-container'>
                <img src={image} alt="" />
            </div>
            <div className='text-container w-4/5 md:w-1/2 mx-auto'>
            <h1 className='font-bold text-4xl text-orange-600'>{name}</h1><br />
            <p>{description}</p> <br />
            <h1 className='font-bold'>Experience: {experience} years</h1>
            <h1 className='font-bold'>Number of Recipes: {recipesNum}+</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    recipes?.map(data=><Recipe recipe={data} key={data.id}></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;