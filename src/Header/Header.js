import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto sticky top-0'>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <Link to='/'>  <a class="btn btn-ghost normal-case text-xl text-indigo-700">Alamgir Hossain</a></Link>
                </div>
                <div class="flex-none ">
                    <ul class="menu menu-horizontal p-0 ">
                        <Link to='/home'><li ><a className='text-indigo-700 font-bold' >Home</a></li></Link>
                        <Link to='/contact'><li ><a className='text-indigo-700 font-bold' >Contact</a></li></Link>
                        <Link to='/blogs'><li ><a className='text-indigo-700 font-bold' >Blogs</a></li></Link>
                        <Link to='/about'><li ><a className='text-indigo-700 font-bold' >About</a></li></Link>
                      
                    </ul>
                </div>
            </div>
       </div>
    );
};

export default Header;