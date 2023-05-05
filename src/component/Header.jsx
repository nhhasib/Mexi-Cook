import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    return (
        <div>
            <ToastContainer position="top-center"/>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;