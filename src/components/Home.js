import React from 'react';
import styled from 'styled-components';

import { motion } from 'framer-motion';
//components
import Popular from './Popular';
import Veggie from './Veggie';
import Category from './Category';
import Search from './search-section/Search';
import Footer from './Footer';

const Home = () => {
    return (
        <div >
            <Search />
            <Category />
            <Veggie />
            <Popular />
            <Footer />
        </div>
    );
};

export default Home;