import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col gap-5">
      {/* Hero image */}
      <div>
        <img src="highhouse.png" alt="" />
      </div>
      {/* Hero info */}
      <div className="flex flex-col items-center text-[40px]">
        <div className="flex flex-col leading-11  ">
          <h1 className="text-blue-600 font-semibold">Find Your Future</h1>
          <h1 className="text-[30px] font-semibold text-center">
            Dream Accomodation
          </h1>
        </div>
        <p className="mt-2 text-[16px] text-center w-[90%]">
          Want to find an accommodation? We are ready to help you find one that
          suits your lifestyle and needs.{" "}
        </p>
      </div>
      {/* Position container */}
      <div className="absolute">
        
      </div>
    </section>
  );
}
