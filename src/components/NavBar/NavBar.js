import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav className='flex justify-between'>
                <div className='text-3xl font-bold ml-10'>
                    <h2>Quiz Exam</h2>
                </div>
                <div className='text-end mr-5 header text-xl font-semibold'>
                    <NavLink to={'home'}>Home</NavLink>
                    <NavLink to={'topics'}>Topics</NavLink>
                    <NavLink to={'statistics'}>Statistics</NavLink>
                    <NavLink to={'blog'}>Blog</NavLink>
                </div>
            </nav >
        </div >
    );
};

export default NavBar;