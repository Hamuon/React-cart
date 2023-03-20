import * as React from 'react';


function Product({ handleClick, image, title, id }) {
    const item = { image, title, id };
    
    
    return ( 
       <div className="flex flex-col justify-center items-center w-2/12 p-4 m-10 border">
            <img alt="product" src={item.image} />
        <p className='m-4'>{item.title}</p>
        <button id={id} className='m-4' onClick={()=>handleClick(item)}>add</button>
        </div>
  );
}
     

 
export default Product;