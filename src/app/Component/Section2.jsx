import React from 'react'

export default function Section2() {
    return (
        <div className='container mx-auto h-[80vh] flex items-center'>
            <div className=' max-w-xs mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl w-[100%]'>
                <div className=' px-[10px] text-center'>
                    <h4 className='font-mono text-2xl font-bold pb-[10px]'>Royal Enfield</h4>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='flex items-center justify-center text-center px-[10px] pt-[40px]'>
                    <img className='w-[100%] h-[50%0] rounded-full '  src="./image/classic-350.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
