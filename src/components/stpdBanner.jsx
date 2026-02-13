import React from 'react';
export const StpdBanner = ({Image, text}) => {
    console.log(text);
    
    return (
        <>   
            <div className='relative w-full h-[30vh] flex justify-center items-center'>
                <img className='object-cover h-full w-full '  src={Image} alt="" />
                <h2 className='text-white text-4xl font-bold absolute    '>{text}</h2>
            </div>   
        </>
    );
};

