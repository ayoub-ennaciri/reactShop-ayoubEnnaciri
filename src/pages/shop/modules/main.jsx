import React from 'react';
import Products from '../../../constants/json/products.json';
import { ProductCard } from '../../../components/productCard';
import { Naviagetion } from '../../../components/naviagetion';
import { useParams } from 'react-router-dom';

export const Main = () => {
    const id = useParams().id
    
    const max = 6;
    const start = max * (id-1);
    const end = start + max;
    
    const newProsucts = Products.slice(start,end)
    console.log(newProsucts);
    
    return (
        <section className='my-10'>
            <div className="">
                
            </div>
            <div className="px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {newProsucts.map((e ,i )=> 
                
                i < max ?
                <ProductCard id={e} />:
                null
                
                )}
            </div>
            
        </section>
    );
};


