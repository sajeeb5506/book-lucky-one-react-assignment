
import { useEffect, useState } from 'react';
import './App.css';
import Shop from './Components/Shop/Shop';

function App() {
  const [books,setBooks]=useState([]);

  useEffect(()=>{
    fetch('books.json')
    .then(res=>res.json())
    .then(data=>setBooks(data));

  },[]);


  return (
    <div className="">
      <Shop></Shop>
    </div>
  );
}

export default App;
