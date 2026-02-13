import React from 'react';
import Images from "../../../constants/images/products"

export const Main = () => {
    return (
        <div className='p-4 py-20 flex flex-col  md:flex-row w-full h-full gap-8'>
            <div className="md:w-[30%] ">
                <img className='md:min-h-100' src={Images.product4} alt="" />
            </div>
            <div className="mt-5 md:min-h-100   md:w-1/2 md:mt-4 ">
                <h3 className="text-2xl mb-5">Our story</h3>
                <p className="text-gray-500">Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                <div className="text-gray-500 mt-8   border-l-3 border-gray-300 pl-8 py-1 ml-2">
                    <p className="">Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                    <p className='mt-4 text-white bg-gray-500 inline-block pr-1 text-[.9em]'>- Steve Job’s </p>
                </div>
            </div>     
        </div>
    );
};

