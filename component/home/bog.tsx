import React from "react";
import Link from "next/link";

export function Bog() {
  return (
    <div className="flex justify-between items-center w-[90%] m-auto pt-[50px]">
      <div className="text-[#C81107] font-bold text-[20px]">ATS Updates</div>
      <div className="flex gap-[30px] items-center">
        <label htmlFor="blog" className="text-[#C9C8C6] text-[12px]">
          search by:
        </label>
        <div className="flex justify-between py-[10px] px-[15px] bg-[#F7F8F9] rounded-[15px]">
          <input
            type="text"
            name="blog"
            id=""
            className="bg-[#F7F8F9]"
            placeholder="Blog"
          />
          <img src="/images/drop.svg" alt="" />
        </div>
        <div className="flex justify-between py-[10px] px-[15px] rounded-[15px] bg-[#F7F8F9]">
          <input
            type="text"
            name=""
            id=""
            className="font-Mulish placeholder:text-[#1B1B1B] text-[16px] bg-[#F7F8F9]"
            placeholder="Established"
          />
          <img src="/images/close-circle.svg" alt="" />
        </div>
      </div>
      <div className="text-[#C81107] text-[16px] flex gap-[50px]">
        <Link href={""}>Blogs</Link>
        <Link href={"/news"}>News</Link>
        <Link href={""}>Gallery</Link>
      </div>
    </div>
  );
}

const blogList = [
  {
    title: "Ba Wasa! Long Established",
    description:
      "Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002 established the first commodity exchange in Africa following...",
    urlA: "/images/going.png",
    urlB: "/images/gloria.png",
    name: "Gloria Erimosele",
    time: "Apr 21 ꞏ 3 min read",
    read: "Read more",
  },
  {
    title: "Meet Oluwatosin - the beautiful ATS Celebrants",
    description:
      "Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
    urlA: "/images/birthday.png",
    urlB: "/images/gloria.png",
    name: "Gloria Erimosele",
    time: "Apr 20 ꞏ 6 min read",
    read: "Read more",
  },
  {
    title: "Commodity Exchanges in Africa",
    description:
      "Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002 established the first commodity exchange in Africa following...",
    urlA: "/images/garden.png",
    urlB: "/images/gloria.png",
    name: "Gloria Erimosele",
    time: "",
    read: "Read more",
  },
  {
    title: "Ways AFEX Commodity Exchanges can help Food...",
    description:
      "Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
    urlA: "/images/birthday.png",
    urlB: "/images/gloria.png",
    name: "Gloria Erimosele",
    time: "Apr 18 ꞏ 3 min read",
    read: "Read more",
  },
  {
    title: "Ways Commodity Exchanges can help Food Systems in Africa",
    description:
      "Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
    urlA: "/images/computer.png",
    urlB: "/images/gloria.png",
    name: "Gloria Erimosele",
    time: "Apr 17 ꞏ 3 min read",
    read: "Read more",
  },
  {
    title: "Ways Commodity Exchanges can help Food Systems in Africa",
    description:
      "Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
    urlA: "/images/computer.png",
    urlB: "/images/gloria.png",
    name: "Gloria Erimosele",
    time: "Apr 16 ꞏ 3 min read",
    read: "Read more",
  },
  {
    title: "Ways Commodity Exchanges can help Food Systems in Africa",
    description:
      "Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
    urlA: "/images/bagblog.png",
    urlB: "/images/gloria.png",
    name: "Gloria Erimosele",
    time: "Apr 15 ꞏ 3 min read",
    read: "Read more",
  },
  {
    title: "Ways Commodity Exchanges can help Food Systems in Africa",
    description:
      "Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
    urlA: "/images/birthday.png",
    urlB: "/images/gloria.png",
    name: "Gloria Erimosele",
    time: "Apr 13 ꞏ 3 min read",
    read: "Read more",
  },
  {
    title: "Ways Commodity Exchanges can help Food Systems in Africa",
    description:
      "Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
    urlA: "/images/bagblog.png",
    urlB: "/images/gloria.png",
    name: "Gloria Erimosele",
    time: "Apr 15 ꞏ 3 min read",
    read: "Read more",
  },
  {
    title: "",
    description:
      "Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
    urlA: "/images/computer.png",
    urlB: "/images/gloria.png",
    name: "Gloria Erimosele",
    time: "Apr 15 ꞏ 3 min read",
    read: "Read more",
  },
  {
    title: "",
    description:
      "Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
    urlA: "/images/birthday.png",
    urlB: "/images/gloria.png",
    name: "Gloria Erimosele",
    time: "Apr 15 ꞏ 3 min read",
    read: "Read more",
  },
  {
    title: "",
    description:
      "Eleni Gabre-Madhin established the first commodity exchange in Africa following a famine in her home country, Ethiopia, in 2002...",
    urlA: "/images/computer.png",
    urlB: "/images/gloria.png",
    name: "Gloria Erimosele",
    time: "Apr 15 ꞏ 3 min read",
    read: "Read more",
  },
];

export function Blogs() {
  return (
    <div className="py-[100px] w-[90%] m-auto flex flex-col ">
      <p className="bg-[#C81107] text-white text-[24px] pl-[5px] w-[80px]">
        Blogs
      </p>
      <div className="pt-[50px] flex flex-wrap gap-[30px] justify-center">
        {blogList.map((ele) => (
          <div key={ele.title} className="shadow-md square">
            <img src={ele.urlA} alt="" className="w-full" />
            <div className="px-[20px] pb-[15px]">
            <p className="text-[#2D3748] text-[20px] font-bold font-Mulish pt-[30px] w-[340px]">{ele.title}</p>
            <p className="text-[#718096] tex-[24px] font-Mulish pb-[30px] w-[400px]">{ele.description}</p>
            <div className="flex justify-between">
              <div className="flex gap-[20px]">
                <img src={ele.urlB} alt="" />
                <div className="">
                  <p className="font-bold text-[#C81107] text-[12px]">{ele.name}</p>
                  <p className="text-[10px] text-[#6F6F70]">{ele.time}</p>
                </div>
              </div>
              <p className="text-[#2D3748] text-[15px] font-bold">{ele.read}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
