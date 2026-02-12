import React from 'react';
import Details from './modules/details';
import { Footer } from '../../layouts/footer';


const Product = () => {
    return (
        <div    className='flex flex-col justify-center items-center'>
            <Details></Details>
            <Footer></Footer>
        </div>
    );
};

export default Product;