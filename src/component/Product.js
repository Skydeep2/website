import React from 'react';
import { NavLink } from 'react-router-dom';
import Format from '../helper/Format';
const Product = ({ curElm }) => {
    const { id, name, image, price, category } = curElm;

    return (
        <NavLink to={`/singleproduct/${id}`}>
            <div className=''>
                <figure className='py-5'>
                    <img src={image} alt={name} className='rounded-md hover:drop-shadow-2xl mb-5' />
                    <figcaption className='bg-slate-400 w-24 rounded-r-md NameDetail text-xl text-center'>{category}</figcaption>
                </figure>
                <div className='flex gap-32 arimo'>
                    <h3>{name}</h3>
                    <p>{<Format price={price} />}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default Product;
