import React, { useState } from 'react';
import Job from './Job';
import company1 from "../image/company1.png";
import company2 from "../image/company2.png";
import company3 from "../image/company3.png";
import company4 from "../image/company4.png";
import company5 from "../image/company5.png";
import company6 from "../image/company6.png";
import company7 from "../image/company7.png";
import company8 from "../image/company8.png";
import company9 from "../image/company9.png";

const Fresher = () => {
    const jobs = [
        {
            name:'Standard Charted',
            position:"Cyber security consultant",
            salary: "20k-30k",
            location:"California, America",
            logo:company1,
        },
        {
            name:'Grossi',
            position:"Web developer",
            salary: "25k-30k",
            location:"Rio, Brazil",
            logo:company2,
        },
        {
            name:'Sharp',
            position:"Frontend developer",
            salary: "30k-45k",
            location:"London, UK",
            logo:company3,
        },
        {
            name:'Piexden',
            position:"Figma developer",
            salary: "20k-35k",
            location:"Berlin, Germany",
            logo:company4,
        },
        {
            name:'Cosmic',
            position:"Web developer",
            salary: "40k-50k",
            location:"Tokyo, Japan",
            logo:company5,
        },
        {
            name:'Youth designer',
            position:"Graphic designer",
            salary: "30k-35k",
            location:"Madrid, Spain",
            logo:company6,
        },
        {
            name:'instant shift',
            position:"React developer",
            salary: "30k",
            location:"Madrid, Spain",
            logo:company7,
        },
        {
            name:'U kash',
            position:"Software developer",
            salary: "30k-35k",
            location:"Madrid, Spain",
            logo:company8,
        },
        {
            name:'Google wallet',
            position:"Software developer",
            salary: "35k",
            location:"Barcelona, Spain",
            logo:company9,
        }
    ]
    const [count, setCount]= useState(6)
    return (
        <>
        <h2 className='text-3xl uppercase text-center text-gray-800 font-semibold mt-16 mb-5 text-blue-500 decoration-blue-500'>Fresher jobs</h2>
        <div className='max-w-screen-xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-5'>
         {
            jobs.slice(0,count).map((item,i)=>
                    <Job key={i} data={item}/>
            
            )
         }           
        </div>
        <div className='flex justify-center'>
        <button className={`bg-blue-500 text-white px-4 mt-5 cursor-pointer rounded-md py-2 ${count>6 ? "hidden":""}`} onClick={()=>setCount(jobs.length)}>See more</button>
        </div>
        </>
    );
};

export default Fresher;