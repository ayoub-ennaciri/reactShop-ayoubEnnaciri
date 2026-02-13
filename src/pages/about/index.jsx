import React from 'react';
import { Main } from './modules/main';
import { Footer } from '../../layouts/footer';
import { StpdBanner } from '../../components/stpdBanner';
import Image from "../../assets/images/banners/banner.webp"
import { Navbar } from '../../layouts/navbar';

export const About = () => {
    console.log(Image);
    
    return (
        <>
            <Navbar/>
            <StpdBanner text="ABOUT" Image={Image} />
            <Main/>
            <Footer/>
        </>
    );
};

