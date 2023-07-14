import React from "react";
import Image from "next/image";

const first = [
  {
    id: 1,
    url: "/images/trade.png",
    name: "Execution",
    discription: "we deliver",
  },
  {
    id: 2,
    url: "/images/like.png",
    name: "Excellence",
    discription: "we deliver results",
  },
  {
    id: 3,
    url: "/images/people.png",
    name: "Empathy",
    discription: " we deliver results humanely",
  },
];
export function FirstValue(src: object) {
  return (
    <div className="" style={{ backgroundImage: "url(/images/backPut.svg)",backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <p className="flex justify-center items-center font-Mulish text-[#313131] font-bold text-[clamp(30px,4vw,56px)] py-[30px]">
        Our Values
      </p>
      <div className="flex flex-wrap gap-[30px] items-center pb-[70px] w-[90%] justify-center m-auto ">
        {first.map((ele) => (
          <div
            className="shadow-md rounded-[11.6px] bg-[#FFFFFF] flex flex-col items-center px-[40px] pb-[50px] pt-[20px] square"
            key={ele.id}
          >
            <img
              src={ele.url}
              alt=""
              style={{ width: "90px", height: "100px", paddingBottom: "20px" }}
            />
            <div className="flex flex-col gap-[5px] items-center">
              <p className="text-[#47494E] font-Mulish font-bold text-[28px] text-center">
                {ele.name}
              </p>
              <p className="text-[#47494E] font-Mulis text-center">
                {ele.discription}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[90%] m-auto pb-[50px]">
        <p className="text-[#343434] font-Mulish font-bold text-[clamp(30px,2vw,40px)] pb-[10px]">
          Duration
        </p>
        <div className="flex justify-between items-center gap-[30px]">
          <p className="font-Mulish text-[#343434] text-left text-[clamp(25px,1.5vw,30px)]">
            ATS is a 6 - 12 months onsite internship program that exposes
            participants with tech backgrounds to top-notch practical
            experience. It focuses on fostering competency and professionalism
            in the tech space
          </p>
          <div>
            <img src="/images/watch.svg" alt="" style={{width: '190', height: 'auto'}} />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[90%] m-auto pb-[50px] items-center gap-[30px] ">
        <img
          src="/images/learners.png"
          alt=""
          style={{ width: "190px", height: "auto" }}
        />
        <div>
          <p className="pb-[10px] text-[#343434] font-Mulish font-bold text-[clamp(30px,2vw,40px)]">
            Teamwork
          </p>
          <p className="font-Mulish text-[#343434] text-left text-[clamp(25px,1.5vw,30px)] max-w-[400px]">
            Young and creative minds coming together to learn and work as a
            team, to achieve the same goal
          </p>
        </div>
      </div>
      <div className="w-[90%] m-auto pb-[50px]">
        <p className="text-[#343434] font-Mulish font-bold text-[clamp(30px,2vw,50px)]">
          Who is Qualified?
        </p>
        <div className="flex justify-between items-center gap-[30px]">
          <p className="font-Mulish text-[#343434] text-left text-[clamp(25px,1.5vw,30px)] max-w-[543px]">
            This paid internship is open to corps member, fresh graduate and
            industrial training students
          </p>
          <img
            src="images/lady.png"
            alt=""
            style={{ width: "190px", height: "auto" }}
          />
        </div>
        <p className="pt-[20px]">
          <button className="px-[20px] py-[12px] text-[#FFFFFF] bg-[#E1261C] rounded-[10px] square">
            Register Now
          </button>
        </p>
      </div>

    </div>
  );
}
