import React from 'react';
import { Main } from './modules/main';
import { Footer } from '../../layouts/footer';
import Image from "../../assets/images/banners/banner.webp"
import { StpdBanner } from '../../components/stpdBanner';
import { Navbar } from '../../layouts/navbar';

export const Contact = () => {
    return (
        <>
            <Navbar/>
            <StpdBanner text="CONTACT" Image={Image}/>
            <Main/>
            <Footer/>
        </>
    );
};

