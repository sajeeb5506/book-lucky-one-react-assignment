import React from 'react';
import './Cart.css';

import {FaShoppingCart} from 'react-icons/fa';
const Cart = ({book,handelAddToCart}) => {
    
   const {name,picture,price}=book;
   

    return (
    
      <div className='cart-container'>
           <div className="cart">
           <img src={picture} alt="" />
            <h1> {name}</h1>
            <h2>Price:${price}</h2>
        
            
            <button onClick={()=>handelAddToCart(book)} className='btn-card'>

             <p className='btn-text'>Add to card</p>
            <FaShoppingCart></FaShoppingCart>

          </button>

      
            
           </div>

        </div>

    );
};

export default Cart;