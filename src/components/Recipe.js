import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

//styles
import styles from './styles/ProductDetail.module.css';

const Recipe = () => {

    const params = useParams();
    const [details , setDetails] = useState({});
    const [active , setActive] = useState();
    const fetchDetails = async () => {
      const key = "b3d5699b038d449ebe309774717aea19";
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${key}`)
      const detailData = await data.json();
      setDetails(detailData)
      
    }

    useEffect(() => {
      fetchDetails()
    }, [params.name])

    return (
      <div style={{height: "150vh"}}>
      <Container>
          <div className={styles.container}>
        <Grid container>
          <Grid item xs={12}>
            <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                  <img src={details.image} style={{width:'80%'}} className="recipeImage" alt="image"/>
            </div>
          </Grid>
          <Grid item xs={12}>
                <div className={styles.textContainer}>
                  <h3>{details.title}</h3>
                </div>
              
          </Grid>
          <Grid item xs={12}>
          <div className={styles.buttonContainer}>
                  <button  className={styles.button}onClick={() => setActive("instructions")}>instructions</button>
                  <button className={styles.button} onClick={() => setActive("ingredients")}>ingredients</button>
            </div>
          {active === "instructions" && (
                     <div>
                        <h3 className={styles.description} dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                        <h3 className={styles.description} dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                    </div>
                )}
                
                {active === "ingredients" && ( 
                    <ul>
                    {
                      details.extendedIngredients.map(ingredient => 
                        <li className={styles.ing} key={ingredient.id}>{ingredient.original}</li>
                      )
                    }
                  </ul>
                )}
          </Grid>
        </Grid>
        </div>
      </Container>
      </div>
    );
};



export default Recipe;