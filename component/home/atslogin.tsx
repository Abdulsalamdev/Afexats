import React from "react";
import Link from 'next/link'

export function Atslogin() {
  return (
    <div className="ats flex justify-center mt-[100px]">
      <div className="w-[90%] m-auto flex gap-[20px] flex-wrap">
        <div className=" bg-[#1B1B1B] px-[20px] py-[30px] grow">
          <label
            htmlFor="ats"
            className="text-white font-Mulish text-[32px] font-bold "
          >
            ATS Login
          </label>
          <div className="flex justify-between bg-white p-[8px] flex-wrap gap-[20px]">
            <input
              type="email"
              name="ats"
              id=""
              className="grow"
              placeholder="Enter your work email address"
            />
            <button className="bg-[#E1261C] px-[25px] py-[10px] text-white font-Mulish font-bold">
              Login
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="bg-[#E2E9EB] flex flex-col pt-[10px] pl-[10px] pr-[70px]">
            <p className="text-[#1B1B1B] font-Mulish font-bold text-[24px]">ATS Login</p>
            <p className="flex gap-[10px]">
              <span className="text-[16px] text-[#1B1B1B] font-Mulish">Login access</span>
              <span className="flex gap-[5px] items-center">
                <img src="/images/indicator.svg" alt="" /> <span className="text-[12px] font-Mulish text-[#3D7500] ">Opened now</span>
              </span>
            </p>
            <p className="text-[12px] font-Mulish text-[#54565B] pb-[30px]">open at 6am</p>
          </div>
          <div className="w-full bg-[#E1261C] flex justify-center text-white font-Mulish font-bold py-[10px]"><Link href={'/admin'}>Login as Admin</Link></div>
        </div>
      </div>
    </div>
  );
}
export function Admin(){
    return(
        <div className="atss flex justify-center mt-[100px]">
        <div className="w-[90%] m-auto flex gap-[20px] flex-wrap">
          <div className=" bg-[#1B1B1B] px-[20px] py-[30px] flex-1">
            <label
              htmlFor="ats"
              className="text-white font-Mulish text-[32px] font-bold"
            >
              ATS Login
            </label>
            <div className="flex justify-between gap-[40px] flex-wrap">
                <input type="text" name="" id="" placeholder="Enter your Username" className="grow p-[8px]"/>
            <div className="flex bg-white p-[8px] justify-between grow flex-wrap gap-[20px]">
              <input
                type="email"
                name="ats"
                id=""
                className="grow"
                placeholder="Enter your Password"
              />
              <button className="bg-[#E1261C] px-[25px] py-[10px] text-white font-Mulish font-bold">
                Login
              </button>
            </div>
            </div>
           
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="bg-[#E2E9EB] flex flex-col pt-[10px] pl-[10px] pr-[70px]">
              <p className="text-[#1B1B1B] font-Mulish font-bold text-[24px]">ATS Login</p>
              <p className="flex gap-[10px]">
                <span className="text-[16px] text-[#1B1B1B] font-Mulish">Login access</span>
                <span className="flex gap-[5px] items-center">
                  <img src="/images/red.svg" alt="" /> <span className="text-[12px] font-Mulish text-[#C81107] ">Closed now</span>
                </span>
              </p>
              <p className="text-[12px] font-Mulish text-[#54565B] pb-[30px]">open at 6am</p>
            </div>
            <div className="w-full bg-[#E1261C] flex justify-center text-white font-Mulish font-bold py-[10px]"><Link href={'/login'}>Login as ATS</Link></div>
          </div>
        </div>
      </div>
    )
}
