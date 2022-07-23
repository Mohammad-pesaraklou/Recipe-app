import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const Searched = () => {

    const params = useParams();

    const [ searchedFood , setSearchedFood] = useState([]);

  
    const getSearched = async (name) => {
        const key = "b3d5699b038d449ebe309774717aea19"
         fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${name}`)  
            .then(res => res.json())
            .then(data => {
                const result = data.results
                setSearchedFood(result)
            })
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])




    return (
        <Grid>
            {
                searchedFood.map(item => {
                    return(
                        <Cart>
                            <img  src={item.image} alt='food image'/>
                            <h3>{item.title}</h3>
                        </Cart>
                    )  
                })
            }
        </Grid>
    );
};

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


export default Searched;