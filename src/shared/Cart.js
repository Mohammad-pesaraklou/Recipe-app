import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { quantityCount , isInCart} from '../services/Function';
import { increase , decrease ,addItem , removeItem } from '../Redux/CartAction';
import trashIcon from '../assets/trash.svg';
import { Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';

import { Avatar, Container, Grid, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

//styles
import styles from '../shared/Cart.module.css';
 
//function
import { shortex } from '../services/Function';


const Cart = ({data}) => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();


    return (
        <Grid container>
                <div className={styles.container} >
              
                <Link to={`/recipe/${data.id}`} className={styles.link}>
                    
                <img className={styles.productImage} src={data.image} />
                <div className={styles.data}>
                    <h3>{shortex(data.title)}</h3>
                </div>
        </Link>
        <div>
        {quantityCount(state , data.id) === 1 && 
            <Button variant="contained" color="primary" sx={{marginBottom: 2}}  className={styles.smallButton} onClick={() => dispatch(removeItem(data))}><DeleteIcon sx={{fontSize: "small"}}/></Button>
            }
            {
                quantityCount(state , data.id) > 1 && <Button variant="contained" sx={{marginBottom: 2}}   className={styles.smallButton} onClick={() => dispatch(decrease(data))}><RemoveIcon sx={{fontSize: "small"}}/></Button>
            }
            {
                quantityCount(state , data.id) > 0 && 
                
                    <span style={{padding: "15px" , fontSize: "30px"}}>{quantityCount(state ,data.id)}</span>
                
            }
            

              {
                    isInCart(state , data.id) ? 
                    <Button variant="contained" color="primary" sx={{marginBottom: 2}}  className={styles.smallButton} onClick={() => dispatch(increase(data))}><AddIcon sx={{fontSize: "small"}}/></Button> :
                    <Button variant="contained" color="primary" endIcon={<AddIcon />}  onClick={() => dispatch(addItem(data))} sx={{marginBottom: 2,fontFamily:"Montserrat",fontWeight:"700"}}>ADD-ITEM</Button>
             }  
            </div>
         </div>
        </Grid>
   
    );
};


export default Cart;