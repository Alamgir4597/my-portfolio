import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto sticky top-0'>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">Alamgir</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>Item 1</a></li>
                        <li tabindex="0">
                            <a>
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>

                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>
       </div>
    );
};

export default Header;