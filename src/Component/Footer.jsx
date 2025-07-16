import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
export default function Footer() {
  return (
    <section className="p-10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:px-20 xl:px-40   ">
        {/* First container */}
        <div className="flex flex-col gap-3">
          <div className="text-xl lg:text-2xl text-zinc-700">
            <span className="text-black font-semibold">H</span>earth
            <span className="text-2xl lg:text-3xl font-semibold text-black">
              Hub
            </span>
          </div>
          <p className="text-zinc-600 xl:w-[50%] leading-5">Find Your Dream Accommodation</p>
          <div className="flex gap-7">
            <FaFacebook />
            <BsTwitterX />
            <ImLinkedin />
            <FaInstagram />
          </div>
        </div>

        {/* Second container */}
        <ul className="flex flex-col gap-5">
          <li className="text-[#25409C] font-semibold text-[15px]">
            NAVIGATION
          </li>
          <li className="text-zinc-600">About Us</li>
          <li className="text-zinc-600">FAQ</li>
          <li className="text-zinc-600">Erasmus Lifa Lisboa </li>
          <li className="text-zinc-600"> Apply For Internship</li>
        </ul>

        {/* Third container */}
        <ul className="flex flex-col gap-5">
          <li className="text-[#25409C] font-semibold text-[15px]">TENANTS</li>
          <li className="text-zinc-600">Video Chat </li>
          <li className="text-zinc-600">Housing Guide</li>
          <li className="text-zinc-600">Terms & Conditions </li>
          <li className="text-zinc-600"> Privacy Policy</li>
        </ul>

        {/* Fourth container */}
        <ul className="flex flex-col gap-5">
          <li className="text-[#25409C] font-semibold text-[15px]">
            RESOURCES
          </li>
          <li className="text-zinc-600">
            Travessa da Cara, 14, 1200-089 Lisbon - Portuga{" "}
          </li>
          <li className="text-zinc-600">+351 932 483 834</li>
          <li className="text-zinc-600">Terms & Conditions </li>
          <li className="text-zinc-600">hello@erasmuslifehousing.com</li>
        </ul>
      </div>
    </section>
  );
}
