import React, { useState } from "react";

export default function Header() {
// Create a useState hook to manage the toggle state
const[isOpen, setIsOpen] = useState(false)
// Function to toggle the menu
function toggleMenu() {
  setIsOpen((prev)=>(!prev))

} 

  return (
    <header className="shadow px-5 py-3 flex  justify-between items-center md:flex md:justify-between md:items-center lg:px-10 lg:py-3">
      {/* Logo */}
      <div className="flex justify-between items-center w-full lg:w-fit">
        <div className="text-3xl text-zinc-700">Logo</div>
        {/* Navbar */}

        {/* toggle button */}
        <button onClick={toggleMenu} className="relative flex flex-col lg:hidden items-center gap-1">
          <div className="rounded p-0.5 bg-black w-[30px]"></div>
          <div className="rounded p-0.5 bg-black w-[30px]"></div>
          <div className="rounded p-0.5 bg-black w-[30px]"></div>
        </button>
      </div>
      <nav className={`${isOpen ? "translate-x-0" : "translate-x-full"} lg:block transition-all duration-300 ease-in-out`}>
        {/* Mobile Menu */}
        <div className="p-10 bg-white shadow-2xl absolute top-12 right-5 flex flex-col gap-7 lg:gap-25 xl:gap-25  items-center lg:flex lg:justify-between lg:text-zinc-700 lg:static lg:bg-transparent lg:shadow-none lg:p-0 lg:w-auto  lg:items-center lg:flex-row">
          <ul className="flex  flex-col gap-10 lg:flex-row  lg:gap-10  ">
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
          <div className=" lg:text-zinc-700 lg:flex lg:gap-10 lg:items-center">
            <div className=" ml-4 cursor-pointer hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300 lg:ml-0">
              Login
            </div>
            <button className="mt-5  rounded-lg border border-zinc-400 px-3 py-2 text-[16px] font-semibold hover:bg-zinc-700 hover:text-white transition-all duration-500 lg:mt-0">
              Rent a Room
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
