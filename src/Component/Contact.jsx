import React from "react";

export default function Contact() {
  return (
    <section className="bg-[#25409C] mx-auto mt-20 lg:mt-30 w-full p-10">
      {/* Heading */}
      <div className="mx-auto flex flex-col gap-5 items-center max-w-[1440px] text-white">
        <h1 className="text-[32px] text-center font-semibold">
          Have questions or doubts?
        </h1>
        <p className="text-[18px]">Don’t hesitate contact us</p>
      </div>
      {/* Input */}
      <div className="mt-7 flex flex-col gap-5 md:flex-row md:justify-center lg:px-20 xl:px-40 "  >
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          required
          className="bg-white p-3 rounded-lg md:w-[30%] lg:w-[35%] xl:max-w-[20%]"
        />
        <input
          type="text"
          name="question"
          id="question"
          placeholder="Enter your Question...."
          required
          className="bg-white p-3 rounded-lg md:w-[30%] lg:w-[35%] xl:max-w-[20%]"
        />
        <button className="bg-[#D6DBEC]   text-[#25409C] rounded-lg font-semibold p-3 md:w-[20%]">
          Send
        </button>
      </div>
    </section>
  );
}
