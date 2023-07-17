import React from 'react'

export function Timer() {

  return (
    <div className='bg-[#47494E] flex justify-center items-center'>
        <div className='py-[50px] flex flex-col  gap-[30px] justify-center items-center '>
            <p className='font-Mulish text-[clamp(35px,2.5vw,48px)] text-[#F9FAFB] font-bold '>Registration Ends</p>
            <div className='rounded-[24px] flex gap-[40px] py-[40px] px-[35px] justify-center items-center lighitBlur flex-wrap'>
                <div className='flex flex-col items-center gap-[20px]'>
                    <div className='bg-[#0D0000] py-[17px] px-[5px] font-bold text-[35px] text-white rounded-[10px] capitalize'>102</div>
                    <p className=''>DAYS</p>
                </div>
                <div className='flex flex-col items-center gap-[20px]'>
                    <div className='bg-[#0D0000] py-[17px] px-[15px] text-[35px] text-white rounded-[10px] font-bold capitalize'>43</div>
                    <p className=''>HOURS</p>
                </div>
                <div className='flex flex-col items-center gap-[20px] capitalize'>
                    <div className='bg-[#0D0000] py-[17px] px-[15px] text-[35px] text-white rounded-[10px] font-bold capitalize'>20</div>
                    <p className=''>MINUTES</p>
                </div>
                <div className='flex flex-col items-center gap-[20px]'>
                    <div className='bg-[#0D0000] py-[17px] px-[15px] text-[35px] text-white rounded-[10px] font-bold capitalize'>04</div>
                    <p className=''>SECONDS</p>
                </div>
            </div>
        </div>
    </div>
  )
}
