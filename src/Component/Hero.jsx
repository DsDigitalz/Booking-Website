import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col gap-5">
      <div>
        <img src="highhouse.png" alt="" />
      </div>
      <div className="flex flex-col items-center text-[40px]">
        <div>
        <h1 className="text-blue-600 font-semibold">Find Your Future</h1>
        <h1 className="text-[30px] font-semibold">Dream Accomodation</h1>
        </div>
        <p className="text-[16px] text-center w-[90%]">
          Want to find an accommodation? We are ready to help you find one that
          suits your lifestyle and needs.{" "}
        </p>
      </div>
    </section>
  );
}
