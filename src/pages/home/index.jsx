import React from 'react';
// import Images from "../"
import { Footer } from '../../layouts/footer';
import { BannerCards } from './modules/bannerCards';
import { Bloge } from './modules/bloge';
import { Idk } from './modules/idk';
import { Navbar } from '../../layouts/navbar';

export const Home = () => {
    return (
        <>
                <Navbar/>
            <div className="flex flex-col justify-center items-center">
                <BannerCards/>
            </div>
                {/* <Idk/> */}
                <Bloge></Bloge>
                <Footer/>
        </>
    );
};
