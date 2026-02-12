import React from 'react';
import { Link } from 'react-router-dom';

export const BannerCard = ({src, text}) => {
    
    return (
        <>
            <div className="group w-fit   overflow-hidden relative ">
                <img className="object-cover group-hover:scale-110  duration-500 ease-out" src={src} alt="" />
                <Link className='' to="path"><button className='cursor-pointer duration-500 hover:bg-[#e65540] hover:text-white bg-white w-45 font-light h-11 absolute bottom-0 left-1/2 -translate-1/2 '>{text}</button></Link>
            </div>
        </>
    );
};
