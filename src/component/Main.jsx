import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Chefs from './Chefs';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <Footer></Footer>
        </div>
    );
};

export default Main;