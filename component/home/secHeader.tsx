import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const navList = [
  { id: 1, name: "Course", link: "/course" },
  { id: 2, name: "Xpert", link: "/xperts" },
  { id: 3, name: "Update", link: "/updates" },
];
export function SecHeader() {
 
  return (
    <div className="w-[90%] m-auto flex justify-between items-center">
      <Image src={"/images/afexLogo.svg"} alt={""} width={70} height={50} />
      <div className="justify-center items-center gap-[50px] hidden sm:flex">
        <Link rel="stylesheet" href="./home">
          <button className="bg-deepRed py-[10px] px-[30px] font-Mulish text-[#FFFFFf] rounded-[10px] square">
            Home
          </button>
        </Link>
        <div className="flex gap-[30px]">
        {navList.map(ele => 
        <Link href={ele.link} key={ele.id} className="hover:text-deepRed">{ele.name}</Link>
        )}
        </div>
      </div>
      <Change />
    </div>
  );
}


import { SVGProps } from "react";
import { Change } from "./change";

export function Hambuger(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        fill="none"
        stroke="#274C5B"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 2H.5m13 5H.5m13 5H.5"
      ></path>
    </svg>
  );
}
