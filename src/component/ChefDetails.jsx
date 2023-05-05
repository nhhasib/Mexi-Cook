import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Recipe from './Recipe';

const ChefDetails = () => {

    const {recipes,chef}=useContext(AuthContext);
    const {id,image,name,recipesNum,experience,description}=chef;
    
    return (
        <div className='w-11/12 mx-auto my-6'>
            <div className='img-container'>
                <img src={image} alt="" />
            </div>
            <div className='text-container w-1/2 mx-auto'>
            <h1 className='font-bold text-4xl text-orange-600'>{name}</h1><br />
            <p>{description}</p> <br />
            <h1 className='font-bold'>Experience: {experience} years</h1>
            <h1 className='font-bold'>Number of Recipes: {recipesNum}+</h1>
            </div>
            <div className='flex gap-6'>
                {
                    recipes.map(data=><Recipe recipe={data} key={data.r_id}></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;