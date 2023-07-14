import React from "react";
import Link from "next/link";

const lists = [
  { id: 0, href: "/login", name: "Login" },
  { id: 1, href: "/course", name: "Courses" },
  { id: 3, href: "/contact", name: "Contact Us" },
  { id: 4, href: "/privacy", name: "Privacy Policy" },
];
export function HeroSection() {
  return (
    <div className="bg-[#000000] text-white ">
      <div className=" flex gap-[30px] py-[50px] justify-between w-[90%] m-auto flex-wrap">
        <div>
          <p className="capitalize text-[#A09D9D] font-Mulish text-[20px] font-bold pb-[10px]">
            address
          </p>
          <p className="font-normal font-Mulish text-[16px] pb-[20px] w-[250px]">
            AFEX Tech Hub. Christiana Oyinade House, Beside First Bank, Iwo
            Road, Ibadan.
          </p>
          <div className="flex items-center">
            <img
              src="/images/c-at.png"
              alt=""
              style={{ width: "16px", height: "16px" }}
            />
            <p>2022 AFEX NIGERIA</p>
          </div>
        </div>
        <div>
          <p className="capitalize text-[#A09D9D] font-Mulish text-[20px] font-bold pb-[10px]">
            contact us
          </p>
          <p className="w-[300px]">
            07000CALLAFEX (+234 70 002 255 2339) For Inquiries
            (contactus@afexnigeria.com) For Complaints and Resolution updates
            (support@afexnigeria.com)
          </p>
        </div>
        <div>
          <p className="capitalise text-[#A09D9D] font-Mulish text-[20px] font-bold pb-[10px]">
            quick links
          </p>
          {lists.map((list) => (
            <div key={list.id}>
              <Link key={list.id} href={list.href}>
                <p>{list.name}</p>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <div className="flex gap-[20px] pb-[20px]">
            <img src="/images/ig.svg" alt="" />
            <img src="/images/fb.svg" alt="" />
            <img src="/images/linkedin.svg" alt="" />
            <img src="/images/tweet.png" alt="" />
          </div>
          <div className="text-[#FFFFFF80] flex bg-[#383838] items-center gap-[10px]">
            <input type="email" name="" id="send" placeholder="Email Address" />{" "}
            <img
              src="/images/send.png"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
