import React from "react";

export function Text() {
  return (
    <div className="flex flex-col justify-center pt-[70px] pb-[50px] text-center items-center">
      <p className="font-Mulsh font-bold text-[clamp(35px,2.5vw,48px)] text-[#343434]">
        {" "}
        <span className=" bg-[#C81107] text-white">Our Featured </span>Courses
      </p>
      <p className="max-w-[755px]">
        The future belongs to those who make their own rules and refuse to
        confine themselves. That’s why at AFEX we do not ask "why" but rather
        "why not". Through our ATS program, we aspire to build an ecosystem of
        tech stars with the skills and mindset needed to thrive now and in the
        future
      </p>
    </div>
  );
}

export function Short() {
  return (
    <div className="flex flex-col justify-center pt-[70px] pb-[50px] text-center items-center">
      <p className="font-Mulsh font-bold text-[clamp(35px,2.5vw,48px)] text-[#343434]">
        <span className=" bg-[#C81107] text-white pl-[5px]">
          Behind the scence{" "}
        </span>
        Team
      </p>
      <p className="text-[18px] font-Mulish text-[#000000]">
        Meet our team of ATS Xperts
      </p>
    </div>
  );
}

export function MySelf() {
  return (
    <div className="w-[90%] m-auto pb-[70px]">
      <div className="flex gap-[20px] flex-wrap">
        <div className="flex flex-col gap-[20px] items-center shadow-md square">
          <img src="/images/mySelf.png" alt="" />
          <p className="text-[#47494E] font-Mulish font-bold text-[18px] text-center">
            Ayodele Davies
          </p>{" "}
          <p className="text-[#47494E] font-Mulish font-bold text-[16px] text-center pb-[30px] w-[167px]">
            Product Management ATS1.0
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div>
            <p className="text-[#343434] font-Mulish text-[24px] font-bold">
              About Myself:
            </p>
            <p className="text-[#343434] text-[24px] max-w-[700px]">
              My name is Ayodele Davies. I’m from Ojirami, Edo State. I work as
              a Product Management Intern at AFEX, and I love sports, art,
              volunteering, adventures, going out of fun dates, meeting new
              people, and watching Lionel Messi.
            </p>
          </div>
          <div>
            <p className="text-[#343434] font-Mulish text-[24px] font-bold max-w-[720px]">
              If you could hang out with any famous person, who would you choose
              and why?
            </p>
            <p className="text-[#343434] text-[24px] max-w-[720px]">
              Two words - Lionel Messi!!!!!!!! As a football enthusiast, I fell
              in love with Messi’s alien and magical way of playing football
              very early in my teenage years. He is simply from another
              planet!!! I watch him every single
            </p>
          </div>
        </div>
      </div>
      <div className="text-[#343434] text-[24px] pb-[30px]">
        weekend because “MESSI IS ART”. His football style gives me joy. His
        sheer humility, calm and easy-going nature, while being the GREATEST OF
        ALL TIME amazes and inspires me as a person. I would love to meet him in
        person, give him one or two football tips to help him win Worldcup, take
        pictures with him for my children and grandchildren to see that I met
        the GREATEST SPORTSMAN OF ALL TIME!!!!!!!!!!
      </div>
      <p className="text-[#343434] font-Mulish text-[24px] font-bold">
        The Zombie apocalypse is coming, mention three Xperts you want on your
        team.
      </p>
      <p className="text-[#343434] text-[24px]">
        Abraham, Samuel (Tochukwu), and Oluwatosin.
      </p>
      <p className="text-[#343434] font-Mulish text-[24px] font-bold">
        What would you like Xperts to remember you by when you leave AFEX?
      </p>
      <p className="text-[#343434] text-[24px] pb-[30px]">
        I believe work is about people, especially the people we live and work
        with every day. Outside of family and close friends, our co-workers
        likely are the most important people in our lives considering the
        incredible amount of time we spend with one another every day. Based on
        this, I’m chiefly interested in being remembered for three things.
      </p>
          <p className="text-[#343434] text-[24px]">1. Being a kind and compassionate person.</p>
          <p className="text-[#343434] text-[24px]"> 2. Being eager to help others; and</p>
          <p className="text-[#343434] text-[24px]">
            3. Having contributed my own quota, however little, to the
            realization of AFEX’s ultimate dream of “helping Africa feed
            itself”.
          </p>
    </div>
  );
}
