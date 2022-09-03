import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { shortex } from "../services/Function";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
//style
import styles from './styles/Veggie.module.css';


function Veggie() {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const key = "b3d5699b038d449ebe309774717aea19";
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9&tags=vegetarian`
    );
    const data = await api.json();
    setVeggie(data.recipes);
  };

  useEffect(() => {
    getVeggie();
  }, []);

  const items = veggie?.map((recipe) => (
    <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
      <Div>
        <img
          src={recipe.image}
          alt="image"
          className={styles.img}
        />
        <p className={styles.text}>{shortex(recipe.title)}</p>
      </Div>
    </Link>
  ));

  const responsive = {
    0: {
      items: 2,
    },
    580: {
      items: 2,
    },
    720:{
      items: 3
    },
    877: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  };

  if (veggie) {
    return (
      <Container>
        <Grid container>
          <Grid item xs={12} mb={5}>
            <Typography variant="h4" color="secondary">
              Veggie Food
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <AliceCarousel
              mouseTracking
              infinite
              autoPlayInterval={1000}
              animationDuration={1500}
              disableDotsControls
              disableButtonsControls
              responsive={responsive}
              items={items}
              autoPlay
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrap = styled.p`
  font-size: 17px;
  color: #cecece;
  font-family: "Montserrat", Courier, monospace;
  position: absolute;
  color: #f9fafa;
  top: 50%;
  font-weight: 900;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  z-index: 15;
`;

const H2 = styled.h2`
  font-family: "Montserrat", Courier, monospace;
  transform: translateX(50px);
  margin-bottom: 4rem;
`;

export default Veggie;
