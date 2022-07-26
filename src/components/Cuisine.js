import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

// import { motion } from "framer-motion";
// import axios from "axios";

const Cuisine = () => {

    const params = useParams();

    const [ cuisine , setCuisine] = useState([]);

  
    const getCuisine = async (name) => {
        const key = "b3d5699b038d449ebe309774717aea19"
         fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=${name}`)  
            .then(res => res.json())
            .then(data => {
                const result = data.results
                setCuisine(result)
            })
    }

    useEffect(() => {
        getCuisine(params.id)
    }, [params.id])




    return (
        <>
         <Nav>
                <Logo to={"/"}>
                    <GiKnifeFork></GiKnifeFork>
                    deliciousss
                </Logo>
            </Nav>
        <Grid>
                {
                    cuisine.map(item => {
                        return(
                            <Cart key={item.id} to={"/recipe/" +item.id}>
                                <img src={item.image} alt="image"/>
                                <h3>{item.title}</h3>
                            </Cart>
                        )
                    })
                }
        </Grid>
        </>
    );
};


const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit , minmax(13rem,1fr));
grid-gap: 3rem;
margin: 40px;
`
const Cart = styled(Link)`
border-radius: 2rem;
overflow: hidden;
text-decoration: none;
img{
width:100%;
border-radius: 2rem;
}
h3{
    text-align: center;
    padding: 1rem;
    font-family: 'Montserrat', Courier, monospace;
    font-size: 16px;
    color: #082032;
}
`
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



export default Cuisine;