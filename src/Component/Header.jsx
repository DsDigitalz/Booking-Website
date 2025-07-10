import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-20 py-4">
      {/* Logo */}
      <div className="text-3xl text-zinc-700">Logo</div>
      {/* Navbar */}
      <nav>
        <ul className="flex gap-15 text-zinc-700 text-[14px]">
          <li className="cursor-pointer hover:text-black hover:scale-105 transition-all duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300">
            Landlords
          </li>
          <li className="cursor-pointer hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300">
            Erasmus Life
          </li>
          <li className="cursor-pointer hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300">
            About Us
          </li>
        </ul>
      </nav>

      <div className="text-[14px] text-zinc-700 flex items-center gap-10 ">
        <div className="cursor-pointer hover:scale-105 hover:text-black scale:text-[18px] transition-all duration-300">
          Login
        </div>
        <button className="rounded-lg border border-zinc-400 px-3 py-2 text-[16px] font-semibold hover:bg-zinc-700 hover:text-white transition-all duration-500">
          Rent a Room
        </button>
      </div>
    </header>
  );
}
