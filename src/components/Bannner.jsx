import React, { useState } from "react";

const Bannner = () => {
    const [role, setRole] = useState(true)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto overflow-hidden my-10">
      <div className="ease-in duration-300">
        {
            role
            ?
            
        <img
        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        src="https://img.freepik.com/free-photo/businessmen-interview_1098-4074.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph"
        alt=""
      />
      :
      
      <img
      className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
      src="https://img.freepik.com/free-photo/smiling-hr-employer-handshaking-successful-job-applicant-hiring-greeting_1163-4102.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.2.31902201.1666701009&semt=ais"
      alt=""
    />
        }
      </div>
      <div className={`flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl ${role?"bg-teal-600":"bg-blue-400"} text-white ease-in duration-300 p-5`}>
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            We always
            <br className="hidden md:block" />
            have solution{' '}
            <span className="inline-block text-deep-purple-accent-400">
              for you
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-white md:text-lg ">
            You can recruit or have dream job for you. Select your best choose from here.
          </p>
          <div className="flex items-center">
            {
                role
                ?
                <button             
                onClick={()=> setRole(false)}
              className=" cursor-pointer h-12 px-6 mr-6 font-medium tracking-wide text-white transition rounded shadow-md bg-teal-500 hover:bg-blue-800   ease-in-out duration-200 "
            >
              I am recruiter
            </button>
            :
            <button              
            onClick={()=>setRole(true)}
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none"
            >
              I am job seeker
            </button>            
            }
                        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannner;
