import React from 'react';
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react';
import './Shop.css';
import Ditels from '../Ditels/Ditels';

const Shop = () => {
    const [books,setBooks]=useState([]);
    const [cart,srtCart]=useState([]);



    useEffect(()=>{
      fetch('books.json')
      .then(res=>res.json())
      .then(data=>setBooks(data));
  
    },[]);


    const handelAddToCart =(book)=>{
     const newBook =[...cart,book];
     srtCart(newBook);
      
    }
  
    return (
        <div className='container'>
    

     
          <div className="card-container">
          {
                 books.map(book => <Cart key={book.id} book={book} handelAddToCart={handelAddToCart}></Cart>)
          
            }
          </div>
            <div className="detils-container">
            <h1>Books Order Summary</h1>
                {
                  cart.map(cart=> < Ditels key={cart.id}  cart={cart}/>)
                }
            </div>
            
       
        </div>

       
    );
};

export default Shop;