import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import { shortex } from '../services/Function';

import styled from 'styled-components'
//styles
import styles from './Home.module.css';
const Popular = () => {

    const [ food , setFood] = useState([]);

    const getFood = async () => {


      
            const key = "41f60d0a1f694c349f753e086f5cfa79"
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9`)  
            const data = await api.json() ;
            setFood(data.recipes)
        
        
    }


    useEffect(() => {
        getFood()
    }, [])


    if(food.length){
     return  ( 
     <div className={styles.container}>
              {
             food.map(recipe => <Cart 
                key={recipe.id}
                data={recipe}
                />)
              }
        </div>)
    }

    return (
        <div>
            loading
        </div>
    );
};




export default Popular;