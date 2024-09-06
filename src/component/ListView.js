import React from 'react';
import Product from './Product';

const ListView = ({ products }) => {
  return (
    <div className="list-container">
      {products.map((curElm) => (
        <div key={curElm.id} className="list-item">
          <Product {...curElm} />
        </div>
      ))}
    </div>
  );
};

export default ListView;
