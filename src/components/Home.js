import React from 'react';
//components
import Popular from './Popular';
import Veggie from './Veggie';
import Category from './Category';
import Search from './Search';

const Home = () => {
    return (
        <div >
            <Search />
            <Category />
            <Veggie />
            <Popular />
        </div>
    );
};

export default Home;