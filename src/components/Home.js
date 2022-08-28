import React from 'react';
import styled from 'styled-components';

import { motion } from 'framer-motion';
//components
import Popular from './Popular';
import Veggie from './Veggie';
import Category from './Category';
import Search from './search-section/Search';

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