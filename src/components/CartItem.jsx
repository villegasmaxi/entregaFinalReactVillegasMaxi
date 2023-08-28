import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Buttons from './Buttons/Buttons'; 

const CartItem = ({item}) => {
  const {deleteItem}= useContext(CartContext)

  return (
    <div className='container d-flex justify-content-around align-items-center border border-1 border-dark rounded-2 p-2 mt-2 mb-2 '>
      <img src={item.img} width={'20%'} alt="{item.name}" />
      <h6>{item.name} </h6>
      <h5>{item.quantity} </h5>
      <h6>$ {item.price} </h6>
      <p>subtotal: ${item.quantity * item.price} </p>
      <Buttons
      btn= "btn btn-danger"
      valor="X"
      handleClick={() => (deleteItem(item.id))} />
    </div>
  )
}

export default CartItem