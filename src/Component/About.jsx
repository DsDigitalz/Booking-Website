import React from "react";

export default function About() {
  return (
    <section className="max-w-[1440px] px-5 mt-20 lg:mt-30 mx-auto flex flex-col lg:flex-row sm:px-20  lg:px-20 xl:px-40">
      {/* About image */}
      <div className=" justify-center w-full lg:flex-1">
        <img src="AboutImg.png" alt="" className="w-full" />
      </div>

      {/* About Info */}
      <div className="mt-10 flex flex-col items-center lg:flex-1 lg:mt-0">
        <div className='w-[90%]'>
          <h1 className="font-bold text-[30px] text-center  lg:text-[34px]">
            We Help Students Find Their Perfect Home
          </h1>
        </div>
        <div className="flex flex-col gap-5 text-center text-[#344054] mt-5 w-[80%]">
          <p className="text-[#1171B9] font-semibold text-[24px]">About Us</p>
          <p>
            Erasmus Life Housing is your go-to hub for finding the perfect home
            for students, by students. Since 2013, our team has helped tons of
            students discover their ideal place. We’ve got a wide selection of
            student-friendly rooms, all built and managed just for you.
          </p>
          <p>
            Our ultimate goal is to make Lisbon the number one destination for
            International Students and Young Workers, and we most surely don’t
            want that your experience finding accommodation to be a negative
            point of that experience!
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 text-[14px] md:grid-cols-2">
          <div className="flex justify-center items-center gap-3 rounded-full bg-[#8d9fe24f] py-2 px-3 text-[#1171B9]">
            <div>
              <img src="check-circle.png" alt="" className="" />
            </div>
            <p>Professional Team</p>
          </div>
          <div className=" flex justify-center items-center gap-3 rounded-full bg-[#8d9fe24f] py-2 px-3 text-[#1171B9]">
            <div>
              <img src="check-circle.png" alt="" />
            </div>
            <p>Always in touch</p>
          </div>
          <div className="flex justify-center items-center gap-3 rounded-full bg-[#8d9fe24f] py-2 px-3 text-[#1171B9]">
            <div>
              <img src="check-circle.png" alt="" />
            </div>
            <p>Verified Rooms</p>
          </div>
          <div className="flex justify-center items-center gap-3 rounded-full bg-[#8d9fe24f] py-2 px-4 text-[#1171B9]">
            <div>
              <img src="check-circle.png" alt="" />
            </div>
            <p>Fast and Secure Booking</p>
          </div>
        </div>
      </div>
    </section>
  );
}
