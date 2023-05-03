import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';

const Header = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;