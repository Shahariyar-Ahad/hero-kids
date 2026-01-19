import React from 'react';

import Logo from '@/Components/Logo';

const loading = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center gap-5'>
            <h2 className='text-4xl font-bold '>Loading babe</h2> 
            <div className='animate-ping'>
                <Logo></Logo>
            </div>
            
        </div>
    );
};

export default loading;
