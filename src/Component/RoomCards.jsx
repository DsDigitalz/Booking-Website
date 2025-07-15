import React from "react";

export default function RoomCards() {
  return (
    <section className="max-w-[1440px] mt-20 px-10">
      {/* Card Heading */}
      <div className=" flex justify-center">
        <h1 className="font-semibold text-3xl text-center">
          Reserve the Finest Rooms
        </h1>
      </div>
      {/* Cards info */}
      <div className="mt-10">
        <div>
          <img src="/card1.png" alt="" />
        </div>
        <div className="border border-zinc-100 shadow  p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium">Riverside Retreat</h2>
            <img src="Heart.png" alt="" className="w-7" />
          </div>
            <p className="mt-4">123 Avenida da Liberdade, Lisbon</p>
            <div>
                <p>500€</p>
            </div>
        </div>
      </div>
    </section>
  );
}
