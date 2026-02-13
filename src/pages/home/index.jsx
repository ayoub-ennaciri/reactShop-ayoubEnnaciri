import React from 'react';
// import Images from "../"
import { Footer } from '../../layouts/footer';
import { BannerCards } from './modules/bannerCards';
import { Bloge } from './modules/bloge';
import { Idk } from './modules/idk';

export const Home = () => {
    return (
        <>
            <BannerCards/>
            <Idk/>
            <Bloge></Bloge>
            <Footer/>
        </>
    );
};
