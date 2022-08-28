import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// styles
import styles from './styles/shopCart.module.css';

//components
import CartFood from '../shared/CartFood';
import { Container, Grid } from '@mui/material';


const ShopFood = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()


    return (
        <Container maxWidth="lg">
            <Grid container p={4} spacing={3}>
            <Grid item xs={12} sm={6} sx={{border: '2px solid gold',height: '300px'}}>
                <div>
      
      {
              state.itemsCounter > 0 && <div className={styles.payment}>
              <p style={{color: "#EEBC1D",fontSize: "30px"}}><span style={{color: "#fefefe"}}>Total Items:</span>{state.itemsCounter}</p>
              <p style={{color: "#EEBC1D",fontSize: "30px"}}><span style={{color: "#fefefe"}}>Total payment:</span>{state.total}</p>
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
                <Grid item xs={12} sm={6}>
                    <div className={styles.cartContainer}>
                    {
                        state.selectedItems.map(item => 
                        <CartFood
                            key={item.id}
                            itemData={item}
                            />)
                    }
                    </div>
                </Grid>
                
                
            </Grid>
     
        </Container>
    );
};

export default ShopFood;