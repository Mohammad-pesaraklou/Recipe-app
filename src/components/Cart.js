import React from 'react';
import styled from 'styled-components';
import "@splidejs/splide/dist/css/splide.min.css";
import {Splide , SplideSlide} from "@splidejs/react-splide";
import { Link } from 'react-router-dom';
//styles
import styles from './Cart.module.css';
 
//function
import { shorten ,shortex } from '../services/Function';


const Cart = ({data}) => {
    return (
        <div className={styles.mainContainer}>
        <Link to={`/recipe/${data.id}`} className={styles.link}>
          
        <div className={styles.container} >
            
         <img className={styles.productImage} src={data.image} />
        <div className={styles.data}>
            <h3>{shortex(data.title)}</h3>
        </div>
       
         </div>
   
       </Link>
       </div>
    );
};


export default Cart;