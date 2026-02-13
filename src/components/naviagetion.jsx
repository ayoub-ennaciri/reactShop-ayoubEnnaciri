import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const Naviagetion = ({elemts}) => {
    const max = 6;
    const theOne = useParams().id
    const result =  Math.ceil(elemts/max);
    console.log(result);

    
    return (
        <div className='flex gap-4 my-10'>
            
            {Array.from({ length: result }, (_, i) => (
        <Link  to={`/shop/${i+1}`}>
          <div className={`aspect-square ${theOne == i + 1? "text-white bg-gray-900" : "text-black bg-white"}  w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-sm`}>
            {i + 1}
          </div>
        </Link>
      ))}
        </div>
    );
};

