import React from 'react';
import Job from './Job';

const Fresher = () => {
    const jobs = [
        {
            name:'google',
            position:"Web developer",
            salary: "20k-30k",
            location:"",
            logo:"",
        },
        {
            name:'google',
            position:"Web developer",
            salary: "20k-30k",
            location:"",
            logo:"",
        },
        {
            name:'google',
            position:"Web developer",
            salary: "20k-30k",
            location:"",
            logo:"",
        },
        {
            name:'google',
            position:"Web developer",
            salary: "20k-30k",
            location:"",
            logo:"",
        },
        {
            name:'google',
            position:"Web developer",
            salary: "20k-30k",
            location:"",
            logo:"",
        },
        {
            name:'google',
            position:"Web developer",
            salary: "20k-30k",
            location:"",
            logo:"",
        }
    ]
    return (
        <div className='max-w-screen-xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-5'>
         {
            jobs.map((item,i)=>
                    <Job key={i} />
            
            )
         }   
        </div>
    );
};

export default Fresher;