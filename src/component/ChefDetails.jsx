import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Recipe from './Recipe';

const ChefDetails = () => {

    const {recipes}=useContext(AuthContext);
    // console.log(recipes)
    
    return (
        <div className=''>
            {/* <div className='img-container'>
                <img src={image} alt="" />
            </div>
            <div className='text-container'>
            <h1 className='font-bold text-2xl'>{name}</h1>
            <h1>Experience: {experience} years</h1>
            <h1>Number of Recipes: {recipesNum}+</h1>
            </div> */}
            <div className='flex gap-6'>
                {
                    recipes.map(data=><Recipe recipe={data} key={data.r_id}></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;