import React, { useState , useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

//styles
import styles from './Cart.module.css';

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
                console.log(params)
            })
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])




    return (
        <>
                <Nav>
                <Logo to={"/"}>
                    <GiKnifeFork></GiKnifeFork>
                    deliciousss
                </Logo>
            </Nav>
        <Grid>
            {
                searchedFood.map(item => {
                    return(
                        <Cart to={"/recipe/" + item.id} key={item.id}>
                            <div>
                                 <img  src={item.image} alt='food image'/>
                                 <h3>{item.title}</h3>
                            </div>
                        </Cart>
                    )  
                })
            }
        </Grid>
        </>
    );
};

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit , minmax(13rem,1fr));
grid-gap: 3rem;
margin: 40px;
`
const Cart = styled(Link)`
border-radius: 2rem;
overflow: hidden;
text-decoration: none;
img{
width:100%;
border-radius: 2rem;
}
h3{
    text-align: center;
    padding: 1rem;
    font-family: 'Montserrat', Courier, monospace;
    font-size: 16px;
   color: #082032;
}
`
const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
justify-content: center;
align-items: center;
font-family: 'Lobster Two', cursive;
color: #082032;

`
const Nav = styled.div`
padding: 4rem 0rem;
margin-left: 8rem;
svg{
  font-size: 2rem;
}


`


export default Searched;