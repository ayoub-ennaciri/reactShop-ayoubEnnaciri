import React from 'react';
// import Images from "../"
import { Footer } from '../../layouts/footer';
import { BannerCards } from './modules/bannerCards';
import { Bloge } from './modules/bloge';

export const Home = () => {
    return (
        <>
            <BannerCards/>
            <Bloge></Bloge>
            <Footer/>
        </>
    );
};
