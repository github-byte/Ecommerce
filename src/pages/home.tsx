import React from 'react';
import Navbar from './navbar';
import Categories from './categories';
import Login from './login';

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <div className='px-20 mt-10'>
                {/* <Categories/> */}
                <Login/>
            </div>
        </div>
    );
}

export default LandingPage;