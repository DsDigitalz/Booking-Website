import React, { useState } from "react";

export default function Header() {
  // Create a useState hook to manage the toggle state
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the menu
  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="shadow px-5 py-3 flex  justify-between items-center md:flex md:justify-between md:items-center lg:px-10 lg:py-3">
      {/* Logo */}
      <div className="flex justify-between items-center w-full lg:w-fit">
        <div className="text-xl lg:text-2xl text-zinc-700">
          <span className="text-black font-semibold">H</span>earth
          <span className="text-2xl lg:text-3xl font-semibold text-black">
            Hub
          </span>
        </div>
        {/* Navbar */}

        {/* toggle button */}
        <button
          onClick={toggleMenu}
          className="relative flex flex-col lg:hidden items-center gap-1"
        >
          <div
            className={`px-3.5 py-0.5 rounded bg-black  transition-all ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></div>
          <div
            className={`px-3.5 py-0.5 rounded bg-black  transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }  `}
          ></div>
          <div
            className={`px-3.5 py-0.5 rounded bg-black transition-all ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></div>
        </button>
      </div>
      <nav>
        {/* Mobile Menu */}

        <div
          className={`border border-zinc-200 lg:static lg:translate-x-0 transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0 " : "-translate-x-full "
          } absolute top-15 left-0 w-[60%] z-20 overflow-hidden
          p-10 bg-white shadow-2xl flex flex-col gap-7
          lg:gap-25 xl:gap-25 items-center lg:flex lg:justify-between
          lg:text-zinc-700 lg:static lg:bg-transparent lg:shadow-none lg:p-0
          lg:w-auto lg:items-center lg:flex-row
          `}
        >
          <div className="absolute p-4 -top-0  left-0 z-30 bg-black h-130 "></div>
          <ul className="flex  flex-col gap-10 lg:flex-row  lg:gap-10  ">
            <li className="cursor-pointer active:bg-black active:rounded  px-2 py-1    active:text-white lg:hover:text-black lg:active:text-zinc-600 lg:active:bg-transparent    hover:scale-105 transition-all duration-300 ">
              Home
            </li>
            <li className=" active:rounded  px-2 py-1    active:text-white  cursor-pointer  active:bg-black hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300 ">
              Landlords
            </li>
            <li className=" active:rounded  px-2 py-1    active:text-white  cursor-pointer  active:bg-black hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300 ">
              Erasmus Life
            </li>
            <li className="active:rounded  px-2 py-1    active:text-white  cursor-pointer  active:bg-black hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300">
              About Us
            </li>
          </ul>
          <div className=" lg:text-zinc-700 lg:flex lg:gap-10 lg:items-center">
            <div className="active:rounded  px-2 py-1    active:text-white mt-3 lg:mt-0 ml-2 cursor-pointer  active:bg-black hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300 lg:ml-0">
              Login
            </div>
            <button className="mt-7 cursor-pointer active:bg-zinc-500 rounded-lg border border-zinc-400 px-3 py-2 text-[16px] font-semibold hover:bg-black hover:text-white transition-all duration-500 lg:mt-0">
              Rent a Room
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
