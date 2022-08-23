/* eslint-disable react/prop-types */
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = ({counter}) => {
  return (
    // <div>🛒{counter} </div>
    <>
    
      <ShoppingCartIcon color='secondary' fontSize='large' />
      <p>{counter}</p>
      
    </>
  )
};

export default CartWidget