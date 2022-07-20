import React from 'react';
//components
import Popular from './Popular';
import Veggie from './Veggie';
import Category from './Category';

const Home = () => {
    return (
        <div >
            <Category />
            <Veggie />
            <Popular />
        </div>
    );
};

export default Home;