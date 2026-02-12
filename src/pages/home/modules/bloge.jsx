import React from 'react';
import { BlogCard } from '../../../components/blogCard';

export const Bloge = () => {
    return (
        <section className='py-20'>
            <div className="text-center mb-10 ">
                <h3 className="text-4xl font-bold">OUR BLOG</h3>
            </div>
            <div className="flex flex-col md:flex-row justify-center  px-4  gap-8">
                <BlogCard css="xl:w-1/5" id="0" />
                <BlogCard css="xl:w-1/5" id="1" />
                <BlogCard css="xl:w-1/5" id="2" />
            </div>
        </section>
    );
};
