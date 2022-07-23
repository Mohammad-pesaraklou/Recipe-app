import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import { shortex } from '../services/Function';

import styled from 'styled-components'
//styles
import styles from './Home.module.css';
const Popular = () => {

    const [ food , setFood] = useState([]);

    const getFood = async () => {
            const key = "b3d5699b038d449ebe309774717aea19"
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=21`)  
            .then(response => {
                return response.json()
            })
            .then(data => {
                setFood(data.recipes)
            })
    }


    useEffect(() => {
        getFood()
    }, [])


    if(food){
     return  ( 
        <>
        <H2>Most Popular food</H2>
     <div className={styles.container}>
              {
             food.map(recipe => <Cart 
                key={recipe.id}
                data={recipe}
                />)
              }
        </div>
        </>
        )
    }

    return (
        <div>
            loading
        </div>
    );
};
const H2 = styled.h2`
    font-family: 'Montserrat', Courier, monospace;
    transform: translate(50px , 50px);
`;





export default Popular;