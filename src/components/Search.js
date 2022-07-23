import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Search = () => {

    const [search , setSearch] = useState("")
    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault()
        navigate('/search/' + search)
    };

    return (
        <div>
            <FormStyle onSubmit={submitHandler}>
                <FaSearch></FaSearch>
                <input type="text" value={search} onChange={event => setSearch(event.target.value)}/>
            </FormStyle>
        </div>
    );
};
const FormStyle = styled.form`
/* margin: 0rem 20rem; */
position: relative;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
input{
    border: none;
    outline: none;
    color: white;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    background: linear-gradient(35deg, #494949 , #313131);
    border-radius: 1rem;
    width: 30%;
    font-family: Arial, Helvetica, sans-serif;
}
svg{
    width: 100%;
    position: absolute;
    top: 50%; 
    color: white;
    left: 0%;
    transform: translate(-155px , -5px);
    
}
`



export default Search;