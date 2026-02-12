import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export   const Footer = () => {

    const h4 = {style: "font-bold text-[1em]  text-gray-800 pb-7"};
    const rest = {style:"text-[.9em] text-gray-600 pb-3"}

    return (
        <div className='w-full px-4 pt-20 bg-gray-200 px-10'>
                <div className="pb-20 grid sm:grid-cols-3  lg:grid-cols-8 lg:">
                    {/* get in touch  */}
                    <div className="flex flex-col pb-8 sm:col-span-full lg:col-span-3 lg:pr-10 ">
                        <h4 className={h4.style}>GET IN TOUCH</h4>
                        <p className={rest.style}>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879 </p>
                        <div className="flex text-[1.2em] gap-4 pt-5">
                            <Link to="" className="text-gray-500 text-[1em]"><FaFacebookF /></Link>
                            <Link to="" className="text-gray-500 text-[1em]"><FaTwitter /></Link>
                            <Link to="" className="text-gray-500 text-[1em]"><FaPinterestSquare /></Link>
                            <Link to="" className="text-gray-500 text-[1em]"><FaGooglePlusG /></Link>
                            <Link to="" className="text-gray-500 text-[1em]"><FaInstagram /></Link>
                        </div>
                    </div>

                    {/* categories */}
                    <div className="flex flex-col pb-8 sm:col-span-1 lg:col-span-1 ">
                        <h4 className={h4.style}>CATEGORIES</h4>
                        <Link to="path" className={rest.style}>Men</Link>                    
                        <Link to="path" className={rest.style}>Women</Link>
                        <Link to="path" className={rest.style}>Dresses</Link>
                        <Link to="path" className={rest.style}>Sunglasses</Link>
                    </div>
                    
                    {/* Links */}
                    <div className="flex flex-col pb-8 sm:col-span-1 lg:col-span-1 ">
                        <h4 className={h4.style}>LINKS</h4>
                        <Link to="" className={rest.style}>Search</Link>
                        <Link to="" className={rest.style}>About Us</Link>
                        <Link to="" className={rest.style}>Contact Us</Link>
                        <Link to="" className={rest.style}>Returns</Link>                        
                    </div>

                    {/* Help */}
                    <div className="flex flex-col pb-8 sm:col-span-1 lg:col-span-1 ">
                        <h4 className={h4.style}>HELP</h4>
                        <Link to="path" className={rest.style}>Track Order</Link>    
                        <Link to="path" className={rest.style}>Returns</Link>    
                        <Link to="path" className={rest.style}>Shipping</Link>    
                        <Link to="path" className={rest.style}>FAQs</Link>                        
                    </div>

                    {/* newsLetter */}
                    <div className="flex flex-col pb-8 sm:col-full lg:col-span-2 ">
                        <h4 className={h4.style}>NEWSLETTER</h4>
                        <input className={`border-b w-[80%] border-gray-300 mb-5 ${rest.style}`} type="email" placeholder='Email Address' />
                        <button className='bg-black text-white w-43 h-12 rounded-4xl'>SUBSCRIBE</button>
                    </div>

                </div>

                <div className="text-[.8em] text-center  text-gray-400 pb-10">
                    Copyright © 2022 <span className='text-[1.3em] text-gray-500'><Link to="path">Shopify Theme Developed by MassTechnologist </Link></span> All rights reserved. 
                </div>
        </div>
    );
};
