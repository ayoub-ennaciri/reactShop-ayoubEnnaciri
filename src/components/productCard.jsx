import React, { useState } from 'react';
import Images  from "../constants/images/products"
import Products from "../constants/json/products.json"
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const ProductCard = ({id}) => {

    
    

    const   [hover, SetHover] = useState(false)
    return (
        <div className='group mb-5 relative'>
            
            <div  className="h-[90%] relative">
                {/* <AnimatePresence>
                    <motion.div onHoverStart={() => SetHover(!hover)} className="absolute  bg-gray-700 w-full h-full">
                        <motion.button initial={{height:0 , opacity:0}}
                        {hover ? animate={{height: "auto", opacity: 1}} : nulla} 
                        exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }} className=' absolute bottom-1 -translate-1/2 left-1/2 bg-black text-white w-43 h-12 rounded-4xl'>SUBSCRIBE</motion.button>

                    </motion.div>
                </AnimatePresence> */}
                <img src={Images[id.image]} alt="" className="" />
            </div>
            <div className="h-[10%] mt-2">
                <Link to={`/Product/${id.id}`}>{id.title}</Link>
                <br />
                <span>{id.price}</span>
            </div>
        </div>
    );
};

