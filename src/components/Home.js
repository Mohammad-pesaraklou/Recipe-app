import React from 'react';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
//components
import Popular from './Popular';
import Veggie from './Veggie';
import Category from './Category';
import Search from './Search';

const Home = () => {
    return (
        <div >
            <Nav>
                <Logo to={"/"}>
                    <GiKnifeFork></GiKnifeFork>
                    deliciousss
                </Logo>
            </Nav>
            <Search />
            <Category />
            <Veggie />
            <Popular />
        </div>
    );
};
const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
justify-content: center;
align-items: center;
font-family: 'Lobster Two', cursive;
color: #082032;
`
const Nav = styled.div`
padding: 4rem 0rem;
margin-left: 8rem;
svg{
  font-size: 2rem;
}


`
export default Home;