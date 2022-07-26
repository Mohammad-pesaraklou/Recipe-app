import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

//styles
import styles from './ProductDetail.module.css';

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
        <div className={styles.container}>
                  <img src={details.image} alt="image"/>
                <div className={styles.textContainer}>
                  <h3>{details.title}</h3>
                </div>
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
              
        </div>
    );
};

const Wrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;
.active{
  background: linear-gradient(35deg, #494949 , #313131); 
}
h3{
margin-bottom: 2rem;
}
li{
  font-size: 1.2rem;
}
ul{
  margin-top: 2rem;  
}
`
const button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`
const Info = styled.div`
margin-left: 10rem;
`

export default Recipe;