import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='absolute top-0 left-0 right-0'>
            <nav className='py-4 flex justify-center border-b border-b-slate-700'>
                <ul className='flex gap-8'>
                    <li className='text-xl font-bold'>
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "underline" : isActive ? "text-orange-500": ""}>Home</NavLink>
                    </li>
                    <li className='text-xl font-bold'>
                        <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "underline" : isActive ? "text-orange-500": ""}>About</NavLink>
                    </li>
                    <li className='text-xl font-bold'>
                        <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "underline" : isActive ? "text-orange-500": ""}>Contact</NavLink>
                    </li>
                    <li className='text-xl font-bold'>
                        <NavLink to="/users" className={({ isActive, isPending }) => isPending ? "underline" : isActive ? "text-orange-500": ""}>Users</NavLink>
                    </li>
                    <li className='text-xl font-bold'>
                        <NavLink to="/posts" className={({ isActive, isPending }) => isPending ? "underline" : isActive ? "text-orange-500": ""}>Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;