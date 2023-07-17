import React from "react";

export function ContactPage() {
  return (
    <div className="atss ">
      <div className="w-[90%] m-auto flex flex-col items-center gap-[20px] pt-[50px]">
        <p className="text-[#343434] text-[clamp(35px,3vw,48px)] font-Mulish font-semibold">
          <span className="bg-[#C81107] text-white pl-[5px] ">Contact</span>Us
        </p>
        <div className="flex gap-[20px] items-center justify-center flex-wrap">
          <form className="bg-[#FFFFFF] p-[20px] shadow-md">
            <div className="flex flex-col gap-[30px]">
              <div className="flex gap-[15px] flex-wrap">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Full Name"
                  className="p-[10px] bg-[#F9FAFB] text-[#B4B4B0] flex-1"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                  className="p-[10px] bg-[#F9FAFB] text-[#eeeebb] flex-1"
                />
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Subject"
                className="p-[10px] grow bg-[#F9FAFB] text-[#B4B4B0] w-full"
              />
              <textarea
                name=""
                id=""
                cols={20}
                rows={5}
                placeholder="Type your message"
                className="p-[10px] grow bg-[#F9FAFB] text-[#B4B4B0] w-full"
              ></textarea>
              <button className="bg-[#E1261C] text-[16px] font-Mulish font-bold text-white w-[100px] square py-[10px]">
                Submit
              </button>
            </div>
            <div className=""></div>
          </form>
          <div className="">
            <p className="text-[Brand/black] text-[16px] font-Mulish font-bold">
              Address
            </p>
            <p className="max-w-[400px]">
              AFEX Tech Hub. Christiana Oyinade House, Beside First Bank, Iwo
              Road, Ibadan.
            </p>
            <p className="text-[Brand/black] text-[16px] font-Mulish font-bold pt-[10px]">
              Contact Us
            </p>
            <p className="">
              +234 (0) 903 003 1333 <br />
              contact us@afexnigeria.com
            </p>
            <p className="text-[Brand/black] text-[16px] font-Mulish font-bold pt-[10px]">
              Follow on:
            </p>
            <div className="bg-[#babfc5] flex gap-[20px] w-[246px] p-[10px]">
              {" "}
              <img src="/images/ig.svg" alt="" />
              <img src="/images/fb.svg" alt="" />
              <img src="/images/linkedin.svg" alt="" />
              <img src="/images/tweet.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
