import React from "react";

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] mx-auto mt-20 flex flex-col items-center gap-7 lg:px-10 lg:mt-30">
      {/* Heading */}
      <div className="px-5 flex flex-col items-center">
        <h1 className="text-[20px] font-semibold text-[#1171B9] ">Testimonials</h1>
        <h1 className="font-semibold text-3xl text-center">
          That’s what our clients say
        </h1>
      </div>
      {/* Cards */}
      <div className="flex justify-center w-[90%] lg:w-[80%] overflow-x-hidden scrollbar-hide">
        <div className="flex overflow-x-scroll flex-nowrap gap-5 ">
          {/* Card 1 */}
          <div className="bg-[#25409C] p-7 flex-shrink-0 flex flex-col max-w-[300px] rounded-lg gap-3 lg:flex-row lg:max-w-[400px] lg:items-center">
            <div className="lg:h-43">
              <img src="T-img1.png" alt="" className="rounded-full" />
            </div>
            <div className="text-white mt-3 flex flex-col gap-3 flex-1 lg:mt-0">
              <h1 className="text-2xl font-semibold">Serena Johnson</h1>
              <p className="text-[14px]">
                Highly recommended. I came across this platform during my
                Erasmus program. The customer support was exceptional - they
                were prompt and helpful in answering all my queries. Thanks to
                Erasmus Life Housing, I found the perfect accommodation.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#25409C] p-7 flex-shrink-0 flex flex-col max-w-[300px] rounded-lg gap-3 lg:flex-row lg:max-w-[400px] lg:items-center">
            <div className="lg:h-43">
              <img src="T-img2.png" alt="" className="rounded-full" />
            </div>
            <div className="text-white mt-3 flex flex-col gap-3 flex-1 lg:mt-0">
              <h1 className="text-2xl font-semibold">Ilias Elfhassi</h1>
              <p className="text-[14px]">
                Erasmus Life Housing deserves a huge shoutout for making my
                housing search that comfortable., I was initially worried about
                finding accommodation in Lisbon, but this Erasmus Life Housing
                made the process stress-free. Five stars!
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#25409C] p-7 flex-shrink-0 flex flex-col max-w-[300px] rounded-lg gap-3 lg:flex-row lg:max-w-[400px] lg:items-center">
            <div className="lg:h-43">
              <img src="T-img1.png" alt="" className="rounded-full" />
            </div>
            <div className="text-white mt-3 flex flex-col gap-3 flex-1 lg:mt-0">
              <h1 className="text-2xl font-semibold">Serena Johnson</h1>
              <p className="text-[14px]">
                Highly recommended. I came across this platform during my
                Erasmus program. The customer support was exceptional - they
                were prompt and helpful in answering all my queries. Thanks to
                Erasmus Life Housing, I found the perfect accommodation.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-[#25409C] p-7 flex-shrink-0 flex flex-col max-w-[300px] rounded-lg gap-3 lg:flex-row lg:max-w-[400px] lg:items-center">
            <div className="lg:h-43">
              <img src="T-img2.png" alt="" className="rounded-full" />
            </div>
            <div className="text-white mt-3 flex flex-col gap-3 flex-1 lg:mt-0">
              <h1 className="text-2xl font-semibold">Ilias Elfhassi</h1>
              <p className="text-[14px]">
                Erasmus Life Housing deserves a huge shoutout for making my
                housing search that comfortable., I was initially worried about
                finding accommodation in Lisbon, but this Erasmus Life Housing
                made the process stress-free. Five stars!
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="rounded border border-zinc-300 p-3 font-medium px-5 text-[18px]">Read More</button>
    </section>
  );
}
