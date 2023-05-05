import React from 'react';
import './Chef.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const Chef = ({chefData}) => {
    const {id,image,name,recipesNum,experience}=chefData;
    // console.log(chefData);
    const {setRecipes,setChef}=useContext(AuthContext);

    // const handleRecipe=()=>{
    //     const recipesData=chefData.recipes;
    //     setRecipes(recipes);
    //     setChef(chefData);
    // }

    const handleLike=()=>{
        toast.success(`You liked ${name}`)
    }

    return (
        <div className='container'>
            <div className='img-container w-4/5 mx-auto'>
                <img src={image} alt="" />
            </div>
            <button onClick={handleLike}><FontAwesomeIcon icon={faThumbsUp} className='text-2xl text-blue-600' /></button>
            <div className='text-container'>
            <h1 className='font-bold text-2xl'>{name}</h1>
            <h1>Experience: {experience} years</h1>
            <h1>Number of Recipes: {recipesNum}+</h1>
            </div>
            <Link to={`/chef/${id}`}><button className='btn-custom'>View Recipes</button></Link>
        </div>
    );
};

export default Chef;