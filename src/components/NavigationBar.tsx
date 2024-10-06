import React from 'react';


const NavigationBar: React.FC = () => {
    return (
        <div className='flex h-14 w-full items-center border-grey border-b'>
            <div className='w-1/4 h-full'></div>
            <div className='flex flex-1 justify-center gap-24'>
                <span>Home</span>
                <span>Products</span>
                <span>Usage</span>
            </div>
            <div className='w-1/4 h-full'></div>
        </div>
    );
};


export default NavigationBar;