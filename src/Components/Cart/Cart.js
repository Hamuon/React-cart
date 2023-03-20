import React from "react";
import Trash from "./../../Assets/icons/trash.png"


const Cart = ({ cart }) => {


  return (
    <article>
          {cart.map((item) => (
            <>
            <div key={item.id} className="block flex-row justify-center items-center p-4 m-10 border">
            <img alt="product" src={item.image} />
            <p>{item.title}</p>
        <div className="flex">
                <span>
                  +
                </span>
                <div>1</div>
                <span>
                  -
                  </span>
                  <span>
                    <img src={Trash} />
                </span>
                  
            </div>
            </div>
            </>
      ))}
      
    </article>
  );
};

export default Cart