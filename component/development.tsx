import React from "react";

export default function Development() {
  return (
    <div className="w-[90%] m-auto flex flex-col gap-[50px] pb-[100px]">
      <div className="flex justify-center">
      <div className="flex gap-[30px] justify-center flex-wrap shadow-md square">
        <img src="/images/progejctManagement.png" alt="" style={{width: 'clamp(320px,19vw,400px)' ,height: 'auto'}}/>
        <div className="py-[20px]">
          <p className="text-[#343434] font-Mulish text-[clamp(35px,2.5vw,48px)] font-bold">Product Management</p>
          <p className="max-w-[693px] pb-[20px] font-Mulish text-black text-[18px] ">Our Product Management course exposes you to organizational functions that guide every step of the product's lifecycle. You will learn how to develop and position products that meet customers' needs and follow the right workflow to collaborate with other developers and designers.</p>
          <button className="p-[12px] text-white flex justify-center rounded-[10px] bg-[#E1261C]">Read More</button>
        </div>
      </div>
      </div>
      <div className="flex justify-center">
      <div className="flex gap-[30px] justify-center flex-wrap shadow-md rounded-[20px] square">
        <div className="py-[20px] pl-[30px]">
          <p className="text-[#343434] font-Mulish text-[clamp(35px,2.5vw,48px)] font-bold">Frontend Development</p>
          <p className="max-w-[693px] pb-[20px] font-Mulish text-black text-[18px]">With our Frontend Developemnt course, you will learn about the day-to-day responsibilities of a web developer and get a general understanding of the core and underlying technologies that power the internet. You will learn how front-end developers create websites and applications that work well and are easy to maintain. </p>
          <button className="p-[12px] text-white flex justify-center rounded-[10px] bg-[#E1261C]">Read More</button>
        </div>
        <img src="/images/fontEnd.png" alt="" style={{width: 'clamp(320px,19vw,400px)' ,height: 'auto'}}/>
      </div>
      </div>
      <div className="flex justify-center">
      <div className="flex gap-[30px] justify-center flex-wrap shadow-md square">
        <img src="/images/backEnd.png" alt="" style={{width: 'clamp(320px,19vw,400px)' ,height: 'auto'}}/>
        <div className="py-[20px]">
          <p className="text-[#343434] font-Mulish text-[clamp(35px,2.5vw,48px)] font-bold">Backend Development</p>
          <p className="max-w-[693px] pb-[20px] font-Mulish text-black text-[18px] pr-[20px]">Our Backend Development course expose participants from entry-level to intermediate software engineering. At the tail of the course, you will be able to build robust software that meets business needs and management objectives</p>
          <button className="p-[12px] text-white flex justify-center rounded-[10px] bg-[#E1261C]">Read More</button>
        </div>
      </div>
      </div>
      <div className="flex justify-center">
      <div className="flex gap-[30px] justify-center flex-wrap shadow-md square">
        <div className="py-[20px] pl-[30px]">
          <p className="text-[#343434] font-Mulish text-[clamp(35px,2.5vw,48px)] font-bold">Mobile App Development</p>
          <p className="max-w-[693px] pb-[20px] font-Mulish text-black text-[18px]">Introduces students to the complete process of mobile application development: covering design, planning, implementation, and testing. Includes panel events with professional software engineers, giving students a well-rounded exploration into  app development, core coding concepts used to build simple iOS or Android apps and exciting opportunities in the tech industry.</p>
          <button className="p-[12px] text-white flex justify-center rounded-[10px] bg-[#E1261C]">Read More</button>
        </div>
        <img src="/images/mobile.png" alt="" style={{width: 'clamp(320px,19vw,400px)' ,height: 'auto'}}/>
      </div>
      </div>
    </div>
  );
}
