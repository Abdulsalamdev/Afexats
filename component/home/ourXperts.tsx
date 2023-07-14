import React from "react";

const xperts = [
  {
    id: 1,
    name: "Abraham Adekunle",
    course: "Backend Development ATS1.0",
    url: "/images/Abraham.png",
  },
  {
    id: 2,
    name: "Yusuff Oyedele",
    course: "Backend Development ATS1.0",
    url: "/images/Yusuff.png",
  },
  {
    id: 3,
    name: "Samuel Azubuine",
    course: "Backend Development ATS1.0",
    url: "/images/Samuel.png",
  },
  {
    id: 4,
    name: "Basheer Balogun",
    course: "Backend Development ATS1.0",
    url: "/images/Basheer.png",
  },
  {
    id: 5,
    name: "Faith Adeosun",
    course: "Backend Development ATS1.0",
    url: "/images/Faith.png",
  },
  {
    id: 6,
    name: "Lukman Abisoye",
    course: "Backend Development ATS1.0",
    url: "/images/Lukman.png",
  },
  {
    id: 7,
    name: "Toluwanimi Ogunbiyi",
    course: "Backend Development ATS1.0",
    url: "/images/Toluwanimi.png",
  },
  {
    id: 8,
    name: "Adebusola Adeyeye",
    course: "Backend Development ATS1.0",
    url: "/images/Adebusola.png",
  },
  {
    id: 9,
    name: "Ayodele Davies ",
    course: "Product Management ATS1.0",
    url: "/images/Ayodele.png",
  },
  {
    id: 10,
    name: "Owolabi Abass ",
    course: "Product Management ATS1.0",
    url: "/images/Owolabi.png",
  },
  {
    id: 11,
    name: "Oluwatosin Olabanji",
    course: "Product Management ATS1.0",
    url: "/images/Oluwatosin.png",
  },
  {
    id: 12,
    name: "Adebimpe Adeoye",
    course: "Product Management ATS1.0",
    url: "/images/Adebimpe.png",
  },
  {
    id: 13,
    name: "Toyyib Oladejo",
    course: "Frontend Development ATS1.0",
    url: "/images/Toyyib.png",
  },
  {
    id: 14,
    name: "Oluwadamilola Oladeji",
    course: "Frontend Development ATS1.0",
    url: "/images/Oluwadamilola.png",
  },
  { id: 15,
    name: "Dotun Ogunrinde",
    course: "Frontend Development ATS1.0",
    url: "/images/Dotun.png",
  },
  { id: 16,
    name: "Blessing Odebunmi  ",
    course: "Frontend Development ATS1.0",
    url: "/images/Blessing.png",
  },
  { id: 17,
    name: "Babatunde Adekunle",
    course: "Frontend Development ATS1.0",
    url: "/images/Babatunde.png",
  },
  { id: 18,
    name: "Adedola Abaru",
    course: "Mobile App Development ATS1.0",
    url: "/images/Adedola.png",
  },
  { id: 19,
    name: "Quadri Ajagbe",
    course: "Mobile App Development ATS1.0",
    url: "/images/Quadri.png",
  },
];
export function OurXperts() {
    return(
        <div>
          <div className="flex justify-center flex-wrap items-center gap-[30px] w-[90%] m-auto">
            {xperts.map(ele => (
              <div className="flex flex-col justify-center gap-[10px] p-[30px] items-center rounded-[12px] shadow-md square" key={ele.id}>
                <img src={ele.url} alt="" />
                <p className="text-[#47494E] font-Mulish font-bold text-[18px] text-center">{ele.name}</p>
                <p className="text-[#47494E] font-Mulish font-bold text-[16px] text-center w-[167px]">{ele.course}</p>
              </div>
            ))}
        </div>
        <div className="flex flex-col justify-center pt-[70px] pb-[50px] text-center items-center">
          <p className="font-Mulsh font-bold text-[clamp(35px,2.5vw,48px)] text-[#343434]"><span className=" bg-[#C81107] text-white pl-[5px]">Xpert of the </span>week</p>
          <p className="text-[18px] font-Mulish text-[#000000]">A weekly report with one of our xpert</p>
        </div>
        </div>
      );
    
}
