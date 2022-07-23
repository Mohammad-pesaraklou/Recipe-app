import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


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
        <Wrapper>
                <div>
                  <h3>{details.title}</h3>
                  <img src={details.image} alt="image"/>
                </div>
                <Info>
                  <Button className={active === 'instruction' ? 'active' : ''} onClick={() => setActive("instructions")}>instructions</Button>
                  <Button className={active === 'ingredient' ? 'active' : ''} onClick={() => setActive("ingredients")}>ingredients</Button>
                </Info>
                {active === "instructions" && (
                  <div>
                  <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                  <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                </div>
                )}
                
                {active === "ingredient" && (
                    <ul>
                    {
                      details.extendedIngredients.map(ingredient => {
                        <li key={ingredient.id}>{ingredient.original}</li>
                      })
                    }
                  </ul>
                )}
              
        </Wrapper>
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
const Button = styled.button`
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