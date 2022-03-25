import React from 'react';
import './Cart.css';

const Cart = ({book}) => {
    
   const {id,name,picture,price}=book;
    return (
    
      <div className='cart-container'>
           <div className="cart">
           <img src={picture} alt="" />
            <h1> {name}</h1>
            <h2>Price:${price}</h2>
        
            
            <button  className='btn-card'>

             <p className='btn-text'>Add to card</p>
   
          </button>

      
            
           </div>

        </div>

    );
};

export default Cart;