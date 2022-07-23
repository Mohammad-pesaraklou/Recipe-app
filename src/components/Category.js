import React from 'react';

import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import { GiNoodles , GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Category = () => {
    return (
        <List>
            <FromList to="/cuisine/italian">
                <FaPizzaSlice />
                <h4>italian</h4>
            </FromList>
            <FromList to="/cuisine/american">
                <FaHamburger />
                <h4>american</h4>
            </FromList>
            <FromList to="/cuisine/thai">
                <GiNoodles />
                <h4>thai food</h4>
            </FromList>
            <FromList to="/cuisine/Japanese">
                <GiChopsticks />
                <h4>japanese</h4>
            </FromList>
        </List>
    );
};

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
width: 100%;
`
const FromList = styled(NavLink)`
text-decoration: none;
margin-right: 2rem;
color: white;
background-color: #313131;
width: 100px;
height: 100px;
text-align: center;
border-radius: 50%;
cursor: pointer;
h4{
    color: #f9fafa;
}
svg{
    width: 100px;
    height: 30px;
    transform: translateY(17px);
    /* background-color: blue; */
    
}
&.active{
    background: linear-gradient(to right #f27121, #e94057);
    svg{
        color: white;
    }
    h3{
        color: white;
    }
   
}
&:hover{
    background: linear-gradient(to right #f27121, #e94057);
    svg{
        color: white;
    }
    h3{
        color: white;
    }
   
    }
`


export default Category;