import React from "react";
import { FaArrowDownShortWide } from "react-icons/fa6";
export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto relative flex flex-col gap-5 lg:flex-row-reverse lg:pl-20 xl:pl-40">
      {/* Hero image */}
      <div className="md:mx-auto lg:flex-1">
        <img src="highhouse.png" alt="" />
      </div>
      {/* Hero info */}
      <div className="mt-12 flex flex-col items-center text-[40px]  lg:mt-15  lg:flex-1 lg:items-start xl:mt-40">
        <div className="flex flex-col leading-10 lg:leading-12  lg:w-[95%] xl:text-5xl">
          <h1 className="text-[#1171B9] font-semibold text-center lg:text-left">Find Your Future</h1>
          <h1 className="text-[24px] font-semibold text-center lg:text-[40px] lg:text-left xl:text-5xl">
            Dream Accomodation
          </h1>
        <p className="leading-6 mt-2 text-[16px] text-[#484848] mx-auto w-[80%] text-center lg:text-left lg:text-[20px]  lg:leading-7 lg:mx-0">
          Want to find an accommodation? We are ready to help you find one that
          suits your lifestyle and needs.{" "}
        </p>
        </div>
        {/* Counter */}
        <div className="flex justify-center items-center gap-9 lg:gap-15 xl:gap-20">
          <div className="mt-7 w-[40%] flex flex-col justify-center items-center leading-5">
            <h1 className="text-xl flex font-semibold">
              4235<span className="text-[#1171B9] text-lg">+</span>
            </h1>
          </div>
          <div className="mt-7 w-[40%] flex flex-col leading-5 justify-center items-center">
            <h1 className="text-xl flex font-semibold">
              535<span className="text-[#1171B9] text-lg">+</span>
            </h1>
          </div>
          <div className="mt-7 w-[40%] flex flex-col leading-5 justify-center items-center">
            <h1 className="text-xl flex font-semibold">
              19905<span className="text-[#1171B9] text-lg">+</span>
            </h1>
          </div>
        </div>

        <div className="mr-2 flex gap-7 justify-center lg:mx-0 lg:gap-13  xl:gap-18">
          <p className="text-[14px] w-[40%] text-[#6C6B6B] ">Rooms</p>
          <p className="text-center text-[14px] w-[40%]  text-[#6C6B6B]">Reservation/ <br />Semester</p>
          <p className="text-[14px] w-[40%] text-[#6C6B6B]">Students</p>
        </div>
      </div>
      {/* Position container */}
      <div className="absolute shadow-2xl   bg-white rounded p-3 w-[85%] top-65 left-7 sm:left-13 md:left-16 md:top-120 lg:top-90 lg:left-20 xl:left-30 xl:top-112">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">Search for available rooms</h1>

          <FaArrowDownShortWide />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3 lg:grid-cols-4 lg:p-3">
          <select
            name="lga"
            id="lga"
            className="  p-1 rounded border border-zinc-400"
          >
            <option value="location">Location</option>
            <option value="Agege">Agege</option>
            <option value="Ajeromi-Ifelodun">Ajeromi-Ifelodun</option>
            <option value="Alimosho">Alimosho</option>
            <option value="Amuwo-Odofin">Amuwo-Odofin</option>
            <option value="Apapa">Apapa</option>
            <option value="Badagry">Badagry</option>
            <option value="Epe">Epe</option>
            <option value="Eti-Osa">Eti-Osa</option>
            <option value="Ibeju-Lekki">Ibeju-Lekki</option>
            <option value="Ifako-Ijaiye">Ifako-Ijaiye</option>
            <option value="Ikeja">Ikeja</option>
            <option value="Ikorodu">Ikorodu</option>
            <option value="Kosofe">Kosofe</option>
            <option value="Lagos Island">Lagos Island</option>
            <option value="Lagos Mainland">Lagos Mainland</option>
            <option value="Mushin">Mushin</option>
            <option value="Ojo">Ojo</option>
            <option value="Oshodi-Isolo">Oshodi-Isolo</option>
            <option value="Shomolu">Shomolu</option>
            <option value="Surulere">Surulere</option>
          </select>
          <div className="  p-1 rounded border border-zinc-400">Budget</div>
          <div className="  p-1 rounded border border-zinc-400">Check In</div>
          <button className="  p-1 rounded bg-[#C2CAE3] text-[#4C62AE] border border-zinc-400 font-semibold">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
