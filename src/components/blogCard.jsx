import React from 'react';
import Blogs from "../constants/json/blogs.json"
import Images from "../constants/images/blog"
import { Link } from 'react-router-dom';

export const BlogCard = ({id ,css}) => {
    return (
        <div className={css}>
            <Link to="path">
                <div className=" group overflow-hidden w-fit mb-5">
                    <img className=' group-hover:scale-110 transition-transform duration-500 ease-out' src={Images[Blogs[id].image]} alt="" />
                </div>
            </Link>
            <div className="">
                <Link className=''><h4 className="hover:text-[#e65540] ease-out duration-500 mb-5 text-[1.2em]">{Blogs[id].title}</h4></Link>
                <div className="mb-5">
                    <span className=" text-gray-400 text-[.9em]">by </span>
                    <span className="text-gray-500 text-[.9em] font-light">{Blogs[id].owner}</span>
                    <span className=" text-gray-400 text-[.9em]"> on </span>
                    <time datetime="" className="text-gray-500 text-[.9em] ">{Blogs[id].date}</time>
                </div>
                <p className="mb-5 text-gray-400 text-[.9em] line-clamp-3 ">{Blogs[id].text}</p>
            </div>
        </div>
    );
};

