import React from 'react';
import company1 from "../image/company1.png"
import { MdOutlineAttachMoney, MdLocationOn } from "react-icons/md";

const Job = () => {
    return (
        <div className='flex flex-col justify-center items-center md:grid grid-cols-5 md:gap-4 md:p-8 border p-4 gap-2 '>
            <div>
                <img src={company1} alt="company logo" className='min-w-[80px] w-36' />
            </div>
            <div className='md:col-span-3'>
                <h3 className='text-2xl font-semibold'>Web developer</h3>
                <h3 className='font-semibold text-blue-500'>winbrans.com</h3>
                <p className='flex items-center'><span className='text-blue-500 text-xl font-semibold'><MdOutlineAttachMoney/></span> 20k-25k</p>
                <p className='flex items-center'><span className='text-blue-500 text-xl font-semibold'><MdLocationOn/></span> Location: Gulshan, Dhaka, Bangladesh</p>
            </div>
            <div className='flex flex-col'>
                <button className='bg-none border-2 border-blue-400 px-7 py-2 hover:bg-blue-400 hover:text-white ease-in duration-300'>Apply</button>
                <a className=' px-3 text-center py-2 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 mt-2 text-white ease-in duration-300'>Full time</a>
            </div>
        </div>
    );
};

export default Job;