import React, { useContext } from 'react';
import { MdOutlineAttachMoney, MdLocationOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ProfileContext } from '../context/Context';

const Job = ({data}) => {
    const {user} = useContext(ProfileContext)
    const navigate = useNavigate()
    const addFanction=()=>{
        if(user){
            toast("Applied")
        }else{
            navigate('/login')
        }
    }
    return (
        <div className='flex flex-col justify-center items-center md:grid grid-cols-5 md:gap-4 md:p-8 border p-4 gap-2 text-gray-700 font-medium '>
            <div>
                <img src={data.logo} alt="company logo" className='min-w-[80px] w-36' />
            </div>
            <div className='md:col-span-3'>
                <h3 className='text-2xl font-semibold text-gray-900'>{data.position}</h3>
                <h3 className='font-semibold text-blue-500'>{data.name}</h3>
                <p className='flex items-center'><span className='text-blue-500 text-xl font-semibold'><MdOutlineAttachMoney/></span> {data.salary}</p>
                <p className='flex items-center'><span className='text-blue-500 text-xl font-semibold'><MdLocationOn/></span> Location: {data.location}</p>
            </div>
            <div className='flex flex-col'>
                <button onClick={addFanction} className='bg-none border-2 border-blue-400 px-7 py-2 hover:bg-blue-400 hover:text-white ease-in duration-300'>Apply</button>
                <a className=' px-3 text-center py-2 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 mt-2 text-white ease-in duration-300'>Full time</a>
            </div>
            <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        </div>
    );
};

export default Job;