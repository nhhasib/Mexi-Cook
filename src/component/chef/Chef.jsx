import React from 'react';
import './Chef.css'

const Chef = ({chefData}) => {
    const {id,image,name,recipesNum,experience}=chefData;
    // console.log(chefData);

    const handleRecipe=()=>{
        const recipe=chefData.recipes;
        console.log(recipe)
    }

    return (
        <div className='container'>
            <div className='img-container'>
                <img src={image} alt="" />
            </div>
            <div className='text-container'>
            <h1 className='font-bold text-2xl'>{name}</h1>
            <h1>Experience: {experience} years</h1>
            <h1>Number of Recipes: {recipesNum}+</h1>
            </div>
            <button onClick={handleRecipe}>View Recipes</button>
        </div>
    );
};

export default Chef;