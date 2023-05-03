import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../provider/AuthProvider';
import Chef from './chef/Chef';

const Chefs = ({children}) => {
    const {datas}=useContext(AuthContext);
    // console.log(datas)
    return (
        <div className='w-4/5 mx-auto mt-10'>
            <h1 className='title my-10'>Our Chefs</h1>
            <div className='flex gap-10'>
            {
            datas.map(data=><Chef chefData={data}></Chef>)
            }
            </div>
        </div>
    );
};

export default Chefs;