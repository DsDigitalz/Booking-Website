import React from "react";

export default function Header() {
  return (
    <header className="px-5 py-3 flex  justify-between items-center md:flex md:justify-between md:items-center lg:px-20 lg:py-3">
      {/* Logo */}
      <div className="flex justify-between items-center w-full lg:w-fit">
        <div className="text-3xl text-zinc-700">Logo</div>
        {/* Navbar */}

        {/* toggle button */}
        <button className="relative flex flex-col lg:hidden items-center gap-1">
          <div className="rounded p-0.5 bg-black w-[30px]"></div>
          <div className="rounded p-0.5 bg-black w-[30px]"></div>
          <div className="rounded p-0.5 bg-black w-[30px]"></div>
        </button>
      </div>
      <nav>
        <div className="p-7 bg-white shadow-2xl absolute top-12 right-5 flex flex-col gap-5 items-center lg:gap-15 lg:text-zinc-700 lg:static lg:bg-transparent lg:shadow-none lg:p-0 lg:w-auto  lg:items-center">
          <ul className="lg:flex  lg:gap-10 ">
            <li className="cursor-pointer hover:text-black hover:scale-105 transition-all duration-300">
              Home
            </li>
            <li className="cursor-pointer hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300 ">
              Landlords
            </li>
            <li className="cursor-pointer hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300 ">
              Erasmus Life
            </li>
            <li className="cursor-pointer hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300">
              About Us
            </li>
          </ul>
          {/* <div className="flex flex-col gap-5 lg:text-zinc-700 lg:flex lg:gap-10 ">
            <div className="cursor-pointer hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300">
              Login
            </div>
            <button className="rounded-lg border border-zinc-400 px-3 py-2 text-[16px] font-semibold hover:bg-zinc-700 hover:text-white transition-all duration-500">
              Rent a Room
            </button>
          </div> */}
        </div>
      </nav>
    </header>
  );
}
