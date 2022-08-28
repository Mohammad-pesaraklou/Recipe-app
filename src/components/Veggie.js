import React, { useEffect , useState } from 'react';
import {Splide ,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import { shortex } from '../services/Function';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';



function Veggie() {

    const [ veggie , setVeggie] = useState([]);

    const getVeggie = async () => {
    
            const key = "b3d5699b038d449ebe309774717aea19"
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9&tags=vegetarian`)  
            const data = await api.json();
            setVeggie(data.recipes)
    }


    useEffect(() => {
        getVeggie()
    }, [])

    
     
    if(veggie){
     return( 
        <Container >
            <Grid container>
            <Grid item xs={12} mb={5}>
                    <Typography variant='h4' color="secondary">
                        Veggie Food
                    </Typography>
            </Grid>
                <Grid item xs={12}>        
                 <Splide options={{
                perPage: 4,
                pagination: false,
                gap: "2rem",
                drag: 'free',
                autoplay:"true",
                
            }}>
                {
                    veggie.map(recipe => {
                       return (
                           <SplideSlide key={recipe.id}>
                            <Wrapper>
                                <Link to={`/recipe/${recipe.id}`}>
                                    <img src={recipe.image} alt="image" />
                                    <p>{shortex(recipe.title)}</p>
                                </Link>
                            </Wrapper>
                        </SplideSlide>
                       )
                    })
                }
                  </Splide>
                </Grid>
            </Grid>
        </Container>)
     }
          
};

const Wrapper = styled.div`
/* margin: 2rem  ; */
text-align: center;
position: relative;
/* width: 50%; */
img{
    width: 100%;
    border-radius: 10px;
    z-index: 3;
}
p{
    font-size: 17px;
    color: #fff;
    font-family: 'Montserrat', Courier, monospace;
    position: absolute;
    color: #f9fafa;
    bottom: 10px;
    left: 15px;
    font-weight: 900;
    text-align: center;
    z-index: 15;
}
`
const Loader = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
width: 120px;
height: 75px;
flex-wrap: wrap;
.loader {
font-size: 22px;
text-transform: uppercase;
margin: auto;
color: #fff;
.ball {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    animation: bounce 0.5s alternate infinite;
}

.ball:nth-child(2){
    animation-delay: 0.16s;
}
.ball:nth-child(3){
    animation-delay: 0.32s;
}


@keyframes bounce {
    from{
        transform: scaleX(1.25);
    }
    to{
        transform: translateY((-50px)) scaleX(1);
    }
}
}
`
const H2 = styled.h2`
    font-family: 'Montserrat', Courier, monospace;
    transform: translateX(50px);
    margin-bottom: 4rem;
`;



export default Veggie;