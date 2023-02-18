import React, { useState } from 'react';
import Job from './Job';

const Experienced = () => {
    const jobs = [
        {
            name:'Quill pen',
            position:"Graphics designer",
            salary: "80-90k",
            location:"California, America",
            logo:"https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg?size=338&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=ais",
        },
        {
            name:'Abstract',
            position:"Web developer",
            salary: "80k",
            location:"Rio, Brazil",
            logo:"https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13994.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=ais",
        },
        {
            name:'Zmba',
            position:"Frontend developer",
            salary: "50k-65k",
            location:"London, UK",
            logo:"https://img.freepik.com/free-vector/z-logo-design_1289-272.jpg?size=338&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=ais",
        },
        {
            name:'Abstract group',
            position:"Figma developer",
            salary: "60k-75k",
            location:"Berlin, Germany",
            logo:"https://img.freepik.com/free-vector/gradient-logo_23-2148149231.jpg?size=338&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=ais",
        },
        {
            name:'Go company',
            position:"Web developer",
            salary: "70k-80k",
            location:"Tokyo, Japan",
            logo:"https://img.freepik.com/free-vector/gradient-go-logo-template_23-2148985016.jpg?size=338&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=ais",
        },
        {
            name:'Abstract',
            position:"Graphic designer",
            salary: "80k-85k",
            location:"Madrid, Spain",
            logo:"https://img.freepik.com/free-vector/abstract-colors-waves-logo_1043-93.jpg?size=338&ext=jpg&uid=R81466279&ga=GA1.2.31902201.1666701009&semt=ais",
        },
        {
            name:'Ab logo',
            position:"Graphics designer",
            salary: "60k-70k",
            location:"Madrid, Spain",
            logo:"https://img.freepik.com/free-vector/coloured-logo-template-design_1222-37.jpg?size=338&ext=jpg&uid=R81466279&ga=GA1.2.31902201.1666701009&semt=ais",
        },
        {
            name:'Global logo',
            position:"Graphics designer",
            salary: "80k-885k",
            location:"Dhaka, Bangladesh",
            logo:"https://img.freepik.com/free-vector/global-logo-blue-orange_1043-206.jpg?size=338&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=ais",
        }
    ]
    const [count, setCount]= useState(6)
    return (
        <>
        <h2 className='text-3xl uppercase text-center text-gray-800 font-semibold mt-16 mb-5 text-blue-500 decoration-blue-500'>Some great jobs for Experienced person</h2>
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

export default Experienced;