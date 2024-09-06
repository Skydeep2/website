import React from 'react';
import { useProducts } from '../context/ProductContext';
import Product from './Product';

const FeatureProducts = () => {
    const { isLoading, featureProducts } = useProducts();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <section className=''>
            <div className='bg-slate-200 mx-52 rounded-lg px-24 py-5'>
                <div className=''>
                    <h1 className='arimo text-2xl '>LOOK AT</h1>
                    <h1 className='NameDetail text-3xl'>Our Feature Products</h1>
                    <div className='grid grid-cols-3 gap-10 '>
                        {featureProducts.map((product) => (
                            <Product key={product.id} curElm={product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureProducts;
