import React from 'react';
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react';
import './Shop.css';
import Ditels from '../Ditels/Ditels';

const Shop = () => {
    const [books,setBooks]=useState([]);
    const [cart,setCart]=useState([]);
    

    useEffect(()=>{
      fetch('books.json')
      .then(res=>res.json())
      .then(data=>setBooks(data));
  
    },[]);

    const handelAddToCart =(book)=>{
     const newCart =[...cart,book];
     setCart(newCart);
      
    };

    const reset =()=>{
      setCart([]);
    }; 
const random=(cart)=>{
const number =Math.floor(Math.random() * cart.length);

const choose = cart[number]
   const chooseOne = cart.filter(item => item === choose)
   setCart(chooseOne);
  console.log(chooseOne)
}
 
    return (
        <div className='container'>
    

     
          <div className="card-container">
          {
                 books.map(book => <Cart key={book.id} book={book} handelAddToCart={handelAddToCart}></Cart>)
          
            }
          </div>
            <div className="detils-container">
             <div className="sticky">
             <h1>Books Order Summary</h1>
                {
                  cart.map(cart=> < Ditels key={cart.id}   cart={cart}/>)
                }
                 <button onClick={()=>random(cart)} >Chocse One For Me</button>
                 <button onClick={()=>reset()} >Chocse Again</button>
             </div>
            </div>
            
       
        </div>

       
    );
};

export default Shop;