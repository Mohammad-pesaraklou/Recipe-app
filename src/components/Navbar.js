import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector  } from 'react-redux'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = () => {

    const state = useSelector(state => state)
    


    return (
        <AppBar position='sticky' sx={{marginBottom: {xs: 15 }}} color="textSecondary">
            <Toolbar sx={{display: 'flex' ,justifyContent: 'space-between',alignItems:"center"}}>
                    <Nav>
                         <Logo to={"/"}>
                             <GiKnifeFork />
                             deliciousss
                         </Logo>
                    </Nav>
                            
                    <Link to='/cart' style={{display: 'flex' ,justifyContent: 'space-between',alignItems:"center",transform:"translateY(-10px)"}}>
                        <div style={{position: "relative"}}>
                        <ShoppingCartIcon sx={{fontSize: '45px', marginTop: '38px', color: '#EEBC1D', marginRight: '20px'}}/> 
                        <NewSpan>{state.itemsCounter}</NewSpan>
                        </div>
                    </Link>
                    
            </Toolbar>
        </AppBar>
    );
};

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Lobster Two', cursive;
color: #EEBC1D;

`
const Nav = styled.div`
 margin-left: 1rem; 
svg{
  font-size: 2rem;
}`

const NewSpan = styled.span`
color: white;
text-decoration: none;
position: absolute;
right: 15px;
top: 25px;
`



export default Navbar;