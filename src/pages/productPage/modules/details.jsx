import React, { useState } from 'react';
import { motion } from 'motion/react';
import Images from '../../../constants/images/products';
import Product from '../../../constants/json/products.json';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Details = () => {

    console.log(Product[1].category);

    const id  = 1;

    const [size ,setSize] = useState(0);
    const [count ,setCount] = useState(0);



    console.log(count);
    

    
    

    return (
        <div className=' flex flex-col md:flex-row md:gap-12'>

            <div className="">
                <img src={Images[Product[id].image]} alt="" />
            </div>

            <div className="">
                {/* main info */}
                <div className="">
                    <h4 className="pt-2 ytext-[#222] text-[1.5em] ">{Product[id].title}</h4>
                    <p className="pt-2 ytext-[#555] text-[1.8em] text-gray-500 ">{Product[id].price} </p>
                    <p className="pt-2 ytext-[#888] text-[.9em] text-gray-400">{Product[id].description} </p>
                </div>

                {/* sizes */}
                <div className="flex  gap-2 rounded-[2px] py-12">
                        {
                    Product[id].sizes.map((e , i)=>
                        <div onClick={()=> setSize(i)}  className={` ${ i == size ? "bg-red-500 text-white":"" } border  border-red-600 py-2 px-5 text-[.8em] rounded-[2px]`}>{e}</div>
                    )
                }
                </div>

                {/* colors
                <div className="flex  gap-2 rounded-[2px] py-12">
                        {
                    Product[id].colors.map((e , i)=>
                        
                        
                        <div onClick={()=> setSize(i)}  className={` ${ i == size ? "border-red-500 " :"" } border  w-12 h-8 ${e.colorClasses}  py-2 px-5 text-[.8em] rounded-[2px]`}></div>
                    )
                }
                </div> */}

                {/* buttons */}
                <div className="flex gap-2 pb-20">
                        <div className=" flex gap-4">

                                <div className="flex items-center justify-self-center bg-gray-200">
                                    <div onClick={() => count > 0 ? setCount(count - 1) : null}  className="text-gray-500 p-3   flex items-center justify-center">
                                        <FaMinus />
                                    </div>
                                    <div className="bg-white ">
                                        <input onChange={(e) => setCount(Number(e.target.value))} className='no-spinner p-2 w-20' type="number" value={count} />
                                    </div>
                                    <div onClick={() => setCount(count + 1)} className="text-gray-500 p-3   flex items-center justify-center">
                                        <FaPlus />
                                    </div>
                                </div>      

                                <div className="bg-[#222222] text-white flex items-center justify-center px-9 py-3 rounded-4xl hover:bg-orange-600 transition-all duration-200 ease-in">
                                    ADD TO CART
                                </div>

                        </div>
                </div>
                
                {/* brand/category */}
                <div className="pb-10 text-[.9em] text-gray-600">

                    <p className="pb-2">
                        Brand : <span className=''>{Product[id].brand}</span>
                    </p>
                    <p className="">
                        categories : <span className='text-gray-800'>{
                        Product[id].category.map( (e,i) =>(i != 0)? " , "+ e : e)
                        }</span>
                    </p>
                    
                </div>  
                
                <div className=" ">
                    <div className="border-t border-gray-300 pt-3 pb-8">
                        <h5 className='flex items-center pb-3 justify-between font-medium'>Description <span className='text-gray-500'> <FaMinus /></span></h5>
                        <p   className="text-[.9em] text-gray-500">{Product[id].description}</p>
                    </div>
                    <div className="border-t border-gray-300 pt-3 pb-8">
                        <h5 className='flex items-center pb-3 justify-between font-medium'>Additional Information  <span className='text-gray-500'> <FaMinus /></span></h5>
                        <p className="text-[.9em] text-gray-500">{Product[id].extraInfo}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;