import React from 'react';
import Blogs from "../../../constants/json/blogs.json"
import Images  from "../../../constants/images/blog"

export const Main = () => {
    const id  = 1;
    return (
        <div>
            <div className="">
                <img src={Images[Blogs[id].image]} alt="" />
            </div>
            <div className="">
                <h4 className="text-2xl">{Blogs[id].title}</h4>
                <p>by {Blogs[id].owner} </p>
                <p className="line-clamp-3">{Blogs[id].text}</p>
            </div>
            
        </div>
    );
};

