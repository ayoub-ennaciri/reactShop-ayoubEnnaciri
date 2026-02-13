import React from 'react';

export const Main = () => {
    return (
        <section className='my-20 p-4 flex flex-col md:flex-row md:gap-8 lg:px-20'>
                <div className="w-full mb-10">
                    <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.811108545479!2d-7.53642662513472!3d33.6037926412781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e1!3m2!1sen!2sma!4v1770973386221!5m2!1sen!2sma" width="600" height="450"  loading="lazy"></iframe>
                </div>
                <div className="">
                    <h4 className='text-2xl mb-8'>Send us your message</h4>
                    <div className=''>
                        <input className='border border-gray-300 rounded-[2px] text-[.9em] p-4 text-gray-500 mb-4 w-full' placeholder='Name' type="text" />
                        <input className='border border-gray-300 rounded-[2px] text-[.9em] p-4 text-gray-500 mb-4 w-full' placeholder='Email' type="Email" />
                        <input className='border border-gray-300 rounded-[2px] text-[.9em] p-4 text-gray-500 mb-4 w-full' placeholder='Phone' type="text" />
                        <textarea className='border border-gray-300 rounded-[2px] text-[.9em] p-4 text-gray-500 mb-4 w-full min-h-[20vh]' placeholder='message' name="" id=""></textarea>
                    </div>
                    <button className='bg-black text-white w-43 h-12 rounded-4xl'>SEND</button>
                </div>
        </section>
    );
};

