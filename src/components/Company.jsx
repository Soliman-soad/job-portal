import React from 'react';

const Company = ({item}) => {
    return (
        <div className={`flex items-center border border-blue-400 p-2 ${item.id>3?"flex-row-reverse":" "}`}>
            <div className='m-5'>
                <img src={item.icon} alt="" className='min-w-[80px]' />
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-gray-900 mb-3'>{item.name}</h2>
                <p>{item.detail}<a href={item.site} className='text-blue-500'>More details</a></p>              
            </div>
        </div>
    );
};

export default Company;