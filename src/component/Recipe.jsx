import React from 'react';

const Recipe = ({recipe}) => {
    // console.log(recipe)
    const {name,cooking_method,ingredients,rating}=recipe;
    // console.log(name)
    return (
        <div className='container'>
            <h1>{name}</h1>
            <p>Cooking Method:{cooking_method}</p>
            <p>Ingredients:{ingredients}</p>
            <p></p>

        </div>
    );
};

export default Recipe;