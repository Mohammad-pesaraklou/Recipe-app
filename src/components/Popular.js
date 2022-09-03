import React, { useEffect, useState } from 'react';
import Cart from '../shared/Cart';
import { CircularProgress, Container,Grid, Typography } from '@mui/material';
import styled from 'styled-components'
//styles

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
        <Container maxWidth="lg">
            <Grid container spacing={2} mt={20}  p={6}>
                <Grid item xs={12} mb={5}>
                    <Typography variant='h4' color="secondary">
                        Most Popular Food
                    </Typography>
                </Grid>
                
                        {
                            food.map(recipe => 
                            <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
                            <Cart 
                             data={recipe}
                             />
                             </Grid>
                             )
                            }
            </Grid>
        </Container>
        )
    }

    return (
        <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
            <CircularProgress size="100px" color='warning'/>
        </div>
    );
};




export default Popular;