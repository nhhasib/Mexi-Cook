import React from 'react';
import './Chef.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Chef = ({chefData}) => {
    const {id,image,name,recipesNum,experience}=chefData;
    // console.log(chefData);
    const {setRecipes,setChef}=useContext(AuthContext);

    const handleRecipe=()=>{
        const recipes=chefData.recipes;
        console.log(recipes);
        setRecipes(recipes);
        setChef(chefData);
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
            <Link to={`/chef/${id}`}><button onClick={handleRecipe}>View Recipes</button></Link>
        </div>
    );
};

export default Chef;