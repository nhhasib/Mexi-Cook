import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const Recipe = ({recipe}) => {

    const {name,cooking_method,ingredients,rating}=recipe;
    const {datas}=useContext(AuthContext);
    const [fav,setFav]=useState(false);

    const handleLove=()=>{
        toast.success(`${name} added to favourite list`);
        setFav(true)
    }
  
    return (
        <div className='container p-6'>
            <button className='text-red-600 disabled:text-red-200' disabled={fav} onClick={handleLove}><FontAwesomeIcon icon={faHeart} className='text-2xl' /></button>

            <h1 className='font-bold text-2xl my-4'>{name}</h1>
            <p> <span className='font-bold'> Cooking Method:</span> <br />{cooking_method}</p>
            <p className='my-4'><span className='font-bold'>Ingredients:</span> <br />{ingredients}</p>
            <p></p>

        </div>
    );
};

export default Recipe;