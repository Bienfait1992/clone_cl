import React from 'react';
import LeftSidebar from './left-sidebar';
import RightSidebar from './right-sidebar';
import Home from '../pages/home';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <LeftSidebar />  
      <div className='timeline'><Outlet /></div>
      <RightSidebar />
        </>
    );
}

export default Layout;