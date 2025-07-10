import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-20 py-4">
      {/* Logo */}
      <div className="text-3xl text-zinc-700">Logo</div>
      {/* Navbar */}
      <nav>
        <ul className="flex gap-10 text-zinc-700 text-[14px]">
          <li>Home</li>
          <li>Landlords</li>
          <li>Erasmus Life</li>
          <li>About Us</li>
        </ul>
      </nav>

      <div className="text-[14px] text-zinc-700 flex items-center gap-10">
        Login
        <button className="rounded-lg border border-zinc-400 px-3 py-2 text-[16px] font-semibold ">Rent a Room</button>
      </div>
    </header>
  );
}
