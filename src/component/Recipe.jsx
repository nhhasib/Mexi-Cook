import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Recipe = ({recipe}) => {
    // console.log(recipe)
    const {name,cooking_method,ingredients,rating}=recipe;
    const {datas}=useContext(AuthContext);
    console.log(datas)
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