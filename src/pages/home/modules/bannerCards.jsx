import React from 'react';
import Images from "../../../constants/images/cards"
import { BannerCard } from '../../../components/bannerCard';

export const BannerCards = () => {
    return (
        <div className='grid grid-cols-1 item-center justify-center gap-10 lg:px-4 lg:grid-cols-3 '>
            
            <div className="flex flex-col gap-8 sm:px-8 md:px-14 p-4 lg:p-0 items-center justify-center">
                <BannerCard text="DRESSES" src={Images.card1}/> 
                <BannerCard text="SUNGLASSES" src={Images.card4}/>
            </div>
            
            <div className="flex flex-col gap-8 sm:px-8 md:px-14 p-4 lg:p-0 items-center justify-center">
                <BannerCard text="WATCHES" src={Images.card2}/>
                <BannerCard text="FOOTWEAR" src={Images.card5}/>
            </div>

            <div className="flex flex-col gap-8 sm:px-8 md:px-14 p-4 lg:p-0 items-center justify-center">
                <BannerCard text="BAGS" src={Images.card3}/>
                <BannerCard text="ACCESSOIRIES" src={Images.card6}/>
            </div>

        </div>
    );
};
