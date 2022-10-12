import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';


const NavBar = () => {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <nav className='flex justify-between'>
                <div className='text-3xl font-bold ml-10'>
                    <h1>
                        <a href='/'>Quiz Exam</a>
                    </h1>
                </div>
                <div className={`header flex flex-col md:flex-row absolute md:static text-end mr-5 font-semibold ${open ? 'top-[-200px]' : 'top-0 right-1'}`}>
                    <NavLink to='home'>Home</NavLink>
                    <NavLink to='topics'>Topics</NavLink>
                    <NavLink to='statistics'>Statistics</NavLink>
                    <NavLink to='blog'>Blog</NavLink>
                </div>
                <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden mr-1">
                    {
                        open ?
                            <Bars3Icon />
                            :
                            <XMarkIcon />
                    }
                </div>
            </nav >
            <br />
        </div >
    );
};

export default NavBar;