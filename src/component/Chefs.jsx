import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../provider/AuthProvider';
import Chef from './chef/Chef';

const Chefs = ({children}) => {
    const {datas}=useContext(AuthContext);
    return (
        <div className='w-4/5 mx-auto mt-10'>
            <h1 className='title my-10'>Our Chefs</h1>
            <div className='grid md:grid-cols-2 gap-10'>
            {
            datas.map(data=><Chef key={data.id} chefData={data}></Chef>)
            }
            </div>
        </div>
    );
};

export default Chefs;