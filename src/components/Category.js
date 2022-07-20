import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import { GiNoodles , GiChopstick } from 'react-icons/gi';
import styled from 'styled-components';
const Category = () => {
    return (
        <List>
            <div>
                <FaPizzaSlice />
                <h4>italian</h4>
            </div>
            <div>
                <FaHamburger />
                <h4>american</h4>
            </div>
            <div>
                <GiNoodles />
                <h4>tai food</h4>
            </div>
            <div>
                <GiChopstick />
                <h4>japanese</h4>
            </div>
        </List>
    );
};

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`


export default Category;