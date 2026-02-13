import React from 'react';
import Details from './modules/details';
import { Footer } from '../../layouts/footer';
import { Navbar } from '../../layouts/navbar';


const Product = () => {
    
    return (
        <div    className='flex flex-col justify-center items-center'>
            <Navbar/>
            <Details></Details>
            <Footer></Footer>
        </div>
    );
};

export default Product;