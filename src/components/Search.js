import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Search = () => {

    const [search , setSearch] = useState("")
    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault()
        navigate('/searched/' + search)
    };

    return (
        <div>
            <FormStyle onSubmit={submitHandler}>
                <input type="text" value={search} onChange={event => setSearch(event.target.value)}/>
                <FaSearch></FaSearch>
            </FormStyle>
        </div>
    );
};
const FormStyle = styled.form`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
transform: translateX(-2.3%);
input{
    position: relative;
    border: none;
    outline: none;
    color: white;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    background: linear-gradient(35deg, #494949 , #313131);
    border-radius: 1rem;
    font-family: Arial, Helvetica, sans-serif;
}
svg{
color: white;
position: absolute;
left: 30%;
}
    @media (max-width: 1950px) {
        input{
            width: 40%;
            height: 40px;
            margin-left: 3rem;
        }
    }
    @media (max-width: 1200px) {
        input{
            width: 50%;
            margin-left: 1rem;
        }
    }
    
    @media (max-width: 768px) {
    }
  
    @media (max-width: 485px) {
        input{
           padding: 0.5rem 1.8rem;
            margin-left:1.5rem;
        }
    }
`



export default Search;