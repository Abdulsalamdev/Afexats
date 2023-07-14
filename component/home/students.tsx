import React from "react";

const image = [
  { url: "/images/A.png", title: "a" },
  { url: "/images/B.png", title: "b" },
  { url: "/images/S.png", title: "c" },
  { url: "/images/C.png", title: "d" },
  { url: "/images/D.png", title: "d" },
];
export function Students() {
  return (
    <div>
      <div className="py-[100px]">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white px-[20px] text-center mb-[-50px]">
            <p className="text-[#343434] font-Mulish font-bold">
              What our Student
            </p>
            <p className="text-[#343434] font-Mulish text-[clamp(35px,2.5vw,48px)] font-bold">
              Are Saying
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-t-[1px] border-t-[#9FA19C]  w-[90%] m-auto">
          <p className="text-center max-w-[795px] pt-[100px] font-Mulish text-[#343434] text-[clamp(25px,1.5vw,30px)]">
            “I have always dreamed of making cool, new projects while working as
            a startup. ATS makes this dream a reality and I would highly
            recommend this to young developers out there.”
          </p>
          <div className="flex justify-between pt-[50px] gap-[50px]">
            <img src="/images/left-arrow.svg" alt="" className="z-10" />
            <div className="flex  gap-[30px] overflow-hidden">
              {image.map(ele => (
                <img src={ele.url} alt="" key={ele.title} style={{ width: "205px", height: "auto" }} className="square"/>
              ))}
            </div>
            <img src="/images/right-arrow.svg" alt="" className="z-10" />
          </div>
          <div className="text-center pt-[50px]">
            <p className="text-[#1B1B1B] font-Mulish font-bold text-[24px]">
              Samuel Azubuine
            </p>
            <p className="font-Mulish text-[16px] font-normal text-[#1B1B1B] w-[173px]">
              backend Development ATS1.0
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[100px] pb-[60px]">
        <img
          src="/images/youtube.png"
          alt=""
          style={{ width: "90%", margin: "auto" }}
        />
      </div>
    </div>
  );
}
