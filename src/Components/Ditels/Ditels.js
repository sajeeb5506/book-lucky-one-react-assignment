import React from 'react';
import './Ditels.css';
const Ditels = ({cart}) => {
const {name,picture}=cart;
console.log(name,picture);

    return (
        <div className='ditels'>
           <img src={picture} alt="" />
            <h2>{name}</h2>
            
      
        </div>
    );
};

export default Ditels;