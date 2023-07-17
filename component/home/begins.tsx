import { url } from 'inspector'
import React from 'react'

export function BeginSec() {

  return (
    <div className='mt-[50px]' style={{backgroundImage: "url(/images/luca.svg)",backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'}}>
      <div className='flex justify-evenly items-center py-[50px] flex-wrap gap-[20px]'>
        <div className='pl-[30px]'>
          <p className='font-Mulish font-bold text-[clamp(40px,4vw,80px)] tracking-[-1.5px] leading-[70px] max-w-[375px] pb-[10px]'>Begin your tech journey</p>
          <p className='font-Mulish text-[#313131] text-[clamp(10px,2vw,15px)] font-bold pb-[30px] max-w-[360px] '>Kickstart your tech career with our AFEX Tech Star program</p>
           <button className='font-Mulish text-[#FFFFFF] text-[16px] bg-[#C81107] py-[12px] px-[20px] rounded-[8px] square'>Join Today</button>
        </div>
        <div className='pr-[30px] square'>
          <img src='images/man-with-laptop.png' alt="" className='w-[400px] h-[400px]' />
        </div>
      </div>
    </div>
  )
}


