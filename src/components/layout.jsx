import React from 'react';
import LeftSidebar from './left-sidebar';
import RightSidebar from './right-sidebar';
import Home from '../pages/home';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <LeftSidebar />  
      <Outlet />
      <RightSidebar />
        </>
    );
}

export default Layout;