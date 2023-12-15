import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='absolute top-0 left-0 right-0'>
            <nav className='py-3 flex justify-center border-b border-b-slate-700'>
                <ul className='flex gap-4'>
                    <li><Link to="/" className='text-xl font-bold hover:text-orange-500'>Home</Link></li>
                    <li><Link to="/about" className='text-xl font-bold hover:text-orange-500'>About</Link></li>
                    <li><Link to="/contact" className='text-xl font-bold hover:text-orange-500'>Contact</Link></li>
                    <li><Link to="/users" className='text-xl font-bold hover:text-orange-500'>Users</Link></li>
                    <li><Link to="/posts" className='text-xl font-bold hover:text-orange-500'>Posts</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;