import React from 'react';
import Navbar from './navbar';
import Categories from './categories';

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <div className='px-20 mt-10'>
                <Categories/>
            </div>
        </div>
    );
}

export default LandingPage;