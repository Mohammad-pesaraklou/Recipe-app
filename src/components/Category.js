import { Container, Grid } from '@mui/material';
import React from 'react';

import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import { GiNoodles , GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Category = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                <List>
            <FromList to="/cuisine/italian">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </FromList>
            <FromList to="/cuisine/american">
                <FaHamburger />
                <h4>American</h4>
            </FromList>
            <FromList to="/cuisine/thai">
                <GiNoodles />
                <h4>Thai food</h4>
            </FromList>
            <FromList to="/cuisine/Japanese">
                <GiChopsticks />
                <h4>Japanese</h4>
            </FromList>
        </List>
                </Grid>
            </Grid>
        
        </Container>
    );
};

const List = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 2rem 0rem;
margin-bottom: 7rem;
gap: 20px;
width: 100%;

`

const FromList = styled(NavLink)`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-decoration: none;
color: white;
background-color: #EEBC1D;
width: 130px;
height: 130px;
text-align: center;
border-radius: 50%;
cursor: pointer;
h4{
    color: #f9fafa;
    margin-top: 25px;
}
svg{
    width: 100px;
    height: 40px;
}

`


export default Category;