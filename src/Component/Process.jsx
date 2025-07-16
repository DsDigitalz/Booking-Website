import React from "react";

export default function Process() {
  return (
    <section className="max-w-[1440px] mx-auto mt-20 flex flex-col items-center gap-10 lg:px-10 lg:mt-30">
      {/* Heading */}
      <div className="px-5 flex flex-col items-center">
        <h1 className="text-[20px] font-semibold text-[#1171B9] ">
          Reservation Process
        </h1>
        <h1 className="font-semibold text-3xl text-center">
          Fast, intuitive and absolutely safe !
        </h1>
      </div>
      {/* Info */}
      <div className="w-[80%] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="text-zinc-700 flex flex-col items-center gap-4 ">
          <h1 className="text-6xl font-semibold">1</h1>
          <h2 className="text-2xl font-semibold">Pick a few places</h2>
          <p className="text-center">
            Explore hundreds of high-quality rooms, studios, and apartments.
            Save favorites and book it. Finding your dream home could not be
            easier!
          </p>
        </div>
        <div className="text-zinc-700 flex flex-col items-center gap-4 ">
          <h1 className="text-6xl font-semibold">2</h1>
          <h2 className="text-2xl font-semibold text-center">Accepting a reservation</h2>
          <p className="text-center">
            You will receive the acceptance of the reservation from the owner in
            just a couple of hours. You will not have to wait long for an answer
            and torment yourself with guesses.
          </p>
        </div>
        <div className="text-zinc-700 flex flex-col items-center gap-4 ">
          <h1 className="text-6xl font-semibold">3</h1>
          <h2 className="text-2xl font-semibold">Payment</h2>
          <p className="text-center">
            All that is necessary after receiving a response, is to send the
            payment and you are almost at the finish line!
          </p>
        </div>
        <div className="text-zinc-700 flex flex-col items-center gap-4 ">
          <h1 className="text-6xl font-semibold">4</h1>
          <h2 className="text-2xl font-semibold">Get your keys!</h2>
          <p className="text-center">
            Your accommodation is reserved, get ready to move as soon as
            possible and check in on your chosen date.
          </p>
        </div>
      </div>
    </section>
  );
}
