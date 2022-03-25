import React from 'react';
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react';
import './Shop.css';
import Ditels from '../Ditels/Ditels';

const Shop = () => {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
      fetch('books.json')
      .then(res=>res.json())
      .then(data=>setBooks(data));
  
    },[]);
  
    return (
        <div className='container'>
    

     
          <div className="card-container">
          {
                 books.map(book => <Cart key={book.id} book={book} ></Cart>)
          
            }
          </div>
            <div className="detils-container">
                <Ditels></Ditels>
            </div>
       
        </div>

       
    );
};

export default Shop;