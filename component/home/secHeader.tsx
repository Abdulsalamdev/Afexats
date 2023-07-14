import React from "react";
import Image from "next/image";
import Link from "next/link";


const navList = [
  { id: 1, name: "Course", link: "/course" },
  { id: 2, name: "Xpert", link: "/xperts" },
  { id: 3, name: "Update", link: "/updates" },
];
export function SecHeader() {
  return (
    <div className="w-[90%] m-auto flex justify-between items-center ">
      <Image src={"/images/afexLogo.svg"} alt={""} width={70} height={50} />
      <div className="flex justify-center items-center gap-[50px]">
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
    </div>
  );
}
