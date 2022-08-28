import React from 'react';
import { useDispatch } from 'react-redux';

//Function
import { shortex } from '../services/Function';
//svg
import trashIcon from '../assets/trash.svg';

//Action
import { increase , decrease , removeItem } from '../Redux/CartAction';

//styles
import styles from '../shared/Cart.module.css';
import { Button } from '@mui/material';



const CartFood = (props) => {

    const { image , title , pricePerServing, quantity } = props.itemData;
    const dispatch = useDispatch();
 

    return (
        <div className={styles.container}>
    
                    <img className={styles.productImage} src={image} />
            <div className={styles.data}>
                <h3>{shortex(title)}</h3>
                <p>{pricePerServing} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <Button variant="contained" sx={{m:1}} onClick={() => dispatch(decrease(props.itemData))}>-</Button> :
                    <Button variant="contained" sx={{m:1}} onClick={() => dispatch(removeItem(props.itemData))}><img src={trashIcon} alt='trashIcon'/></Button>
                }
                <Button variant="contained" sx={{m:1}} onClick={() => dispatch(increase(props.itemData))}>+</Button>
            </div>
    </div>
    );
};

export default CartFood;