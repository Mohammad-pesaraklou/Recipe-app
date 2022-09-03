import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// styles
import styles from './styles/shopCart.module.css';

//components
import CartFood from '../shared/CartFood';
import { Container, Grid, Typography } from '@mui/material';


const ShopFood = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()


    return (
        <Container maxWidth="lg">
            <Grid container sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection:{xs:'column',md: 'row'}}}>
            <Grid item p={2}  xs={12} sm={6} sx={{border: '2px solid gold',height: '300px'}}>
                <div>
      
      {
              state.itemsCounter > 0 && <div className={styles.payment}>
              <Typography sx={{color: "#EEBC1D",fontSize:{xs: '18px',md: '30px'}}}><span style={{color: "#fefefe"}}>Total Items:</span>{state.itemsCounter}</Typography>
              <Typography sx={{color: "#EEBC1D",fontSize:{xs: '18px',md: '30px'}}}><span style={{color: "#fefefe"}}>Total payment:</span>{state.total}</Typography>
              <div className={styles.buttonContainer}>
                  <button className={styles.checkout} onClick={() => dispatch({type: "CHECKOUT"})}>Check Out</button>
                  <button className={styles.clear} onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                  </div>
            </div>
      }

        {
          state.checkout && <div className={styles.complete}>
              <h3>checkout successfully</h3>
              <Link to='/'>Products</Link>
              </div> 
      }

      {
        
           !state.checkout &&  state.itemsCounter === 0 && <div className={styles.complete}>
               <h3>Want to buy?</h3>
               <Link to='/'>Products</Link>
              </div>
      }
  
      </div>
                </Grid>
                        <Grid item xs={12}  sm={6} mt={4}>
                    <div className={styles.cartContainer}>

                    {
                        state.selectedItems.map(item => 
                            <CartFood
                            key={item.id}
                            itemData={item}
                            />
                            
                            )
                        }
                    </div>
                        </Grid>
                
                
            </Grid>
     
        </Container>
    );
};

export default ShopFood;