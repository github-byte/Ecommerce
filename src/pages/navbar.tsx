import React from 'react';
import './home.css'
import Search from './search';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center shadow-2xl h-100 p-2 pl-20 pr-20'>
                <div>
                    logo
                </div>
                <div>
                    <Search/>
                </div>
                <div>
                    <button className='btn bg-[red] text-white p-2 rounded-md w-32 hover:bg-red-600'>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;