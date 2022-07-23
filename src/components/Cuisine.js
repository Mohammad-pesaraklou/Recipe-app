import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import styled from 'styled-components';
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
        <Grid>
                {
                    cuisine.map(item => {
                        return(
                            <Cart key={item.id}>
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
const Cont = styled.div`
background: #082032;

`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit , minmax(13rem,1fr));
grid-gap: 3rem;
margin: 40px;
`
const Cart = styled.div`
border-radius: 2rem;
background: #082032;
overflow: hidden;
img{
width:100%;
/* border-radius: 2rem; */
}
h3{
    text-align: center;
    padding: 1rem;
    font-family: 'Montserrat', Courier, monospace;
    font-size: 16px;
    color: white;
}
`



export default Cuisine;