import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Hambuger } from './secHeader';

const navList = [
    { id: 1, name: "Course", link: "/course" },
    { id: 2, name: "Xpert", link: "/xperts" },
    { id: 3, name: "Update", link: "/updates" },
  ];

export  function Change() {
    const [visible,setisVisible] = useState(false)
  return (
         <div className='block cursor-pointer relative sm:hidden ' onClick={() => setisVisible(!visible)}>
        <Hambuger />
        { visible ?  <div className="bg-[#C81107] flex flex-col gap-[20px] items-center list-none absolute  top-[66px] right-0 left-[-80px] p-[20px] rounded-[20px]">
        <Link href="./home">
          <button className="py-[10px] px-[30px] font-Mulish text-[#FFFFFf] rounded-[10px] square">
            Home
          </button>
        </Link>
        <div className="flex flex-col gap-[30px] ">
        {navList.map(ele => 
        <Link href={ele.link} key={ele.id} className="text-white hover:text-deepRed">{ele.name}</Link>
        )}
        </div>
      </div>

      : null}
      </div>
  )
}
