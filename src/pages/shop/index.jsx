import React from 'react';
import { Main } from './modules/main';
import { Footer } from '../../layouts/footer';
import { Naviagetion } from '../../components/naviagetion';
import Products from '../../constants/json/products.json';
import { StpdBanner } from '../../components/stpdBanner';
import image from "../../assets/images/banners/banner.webp"

export const Shop = () => {
    console.log(image);
    
    return (
        <>
            <StpdBanner text="SHOP" Image={image} />
            <Main />
            <section className='w-full flex justify-center'>
            <Naviagetion elemts={Products.length}/>
            </section>
            <Footer></Footer>
        </>
    );
};

