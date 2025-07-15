import React from "react";

export default function About() {
  return (
    <section className="max-w-[1440px] mt-20 mx-auto flex flex-col ">
      {/* About image */}
      <div>
        <img src="AboutImg.png" alt="" />
      </div>

      {/* About Info */}
      <div className="mt-10 flex flex-col items-center">
        <div>
          <h1 className="font-bold text-[30px] text-center">
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
        <div className="mt-10 grid grid-cols-1 gap-5 text-[14px]">
          <div className="flex items-center gap-3 rounded-full bg-[#8d9fe24f] py-2 px-3 text-[#1171B9]">
            <div>
              <img src="check-circle.png" alt="" />
            </div>
            <p>Professional Team</p>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-[#8d9fe24f] py-2 px-3 text-[#1171B9]">
            <div>
              <img src="check-circle.png" alt="" />
            </div>
            <p>Always in touch</p>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-[#8d9fe24f] py-2 px-3 text-[#1171B9]">
            <div>
              <img src="check-circle.png" alt="" />
            </div>
            <p>Verified Rooms</p>
          </div>
        </div>
      </div>
    </section>
  );
}
