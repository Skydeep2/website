import React from 'react';
import Product from './Product';

const GridView = ({ products }) => {
    
  return (
    <div className="container grid grid-cols-3 gap-4">
      {products.map((curElm) => (
        <Product key={curElm.id} {...curElm} />
      ))}
    </div>
  ); 
};

export default GridView;
