import React from 'react';
import { Main } from './modules/main';
import { Footer } from '../../layouts/footer';
import Image from "../../assets/images/banners/banner.webp"
import { StpdBanner } from '../../components/stpdBanner';

export const Contact = () => {
    return (
        <>
            <StpdBanner text="CONTACT" Image={Image}/>
            <Main/>
            <Footer/>
        </>
    );
};

