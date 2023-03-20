import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart'
import { useEffect, useState } from "react";
import axios from "axios";




function App() {
  const [products, setProducts] = useState(null)
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false)
  

 useEffect(() => {
   axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => setProducts(res.data.slice(0, 4))).catch()
 }, []);
  
  const handleClick = (item) => {
    // Add to cart
    setCart((cart) => [
      ...cart,
      { ...item, amount: 1 } // <-- initial amount 1
    ]);
  };

  const clickHandler = () => {
    setShow(!show);
  }




  return (
    <div className="flex flex-col items-center">
      <Navbar onClick={clickHandler} />
      {show ? <Cart cart={cart} setCart={setCart} /> : <p></p>}
      <section className='flex flex-wrap justify-between items-center m-20'>
        {products ? products.map(p => <Product handleClick={handleClick} id={p.id} key={p.id} title={p.title} image={p.thumbnailUrl} />) : <p>Loading...</p>}
      </section>
    </div>
  );
}

export default App;
