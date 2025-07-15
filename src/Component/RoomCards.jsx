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
      <div className="mt-7 grid grid-cols-1 gap-5 sm:flex-col sm:items-center md:px-10">
        {/* Card 1 */}
        <div className="">
          <div>
            <img src="/card1.png" alt="" className="sm:w-full" />
          </div>
          <div className="border border-zinc-100 shadow-2xl shadow-zinc-300 rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Riverside Retreat</h2>
              <img src="Heart.png" alt="" className="w-7" />
            </div>
            <p className="mt-4 text-[15px]">123 Avenida da Liberdade, Lisbon</p>
            <div className="flex justify-between items-center mt-4 ">
              <p>500€</p>
              <div className="flex justify-center items-center gap-2 rounded-full bg-zinc-50 py-1 w-[50%] text-[#1171B9]">
                <div>
                  <img src="check-circle2.png" alt="" />
                </div>
                <p className="text-zinc-700 font-medium text-[14px]">
                  ELL Verified
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}

        <div>
          <div>
            <img src="/card2.png" alt="" className="sm:w-full" />
          </div>
          <div className="border border-zinc-100 shadow-2xl shadow-zinc-300 rounded-2xl  p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Sunset Serenity Suite</h2>
              <img src="Heart.png" alt="" className="w-7" />
            </div>
            <p className="mt-4 text-[15px]">456 Rua Augusta, Lisbon</p>
            <div className="flex justify-between items-center mt-4">
              <p>700€</p>
              <div className="flex justify-center items-center gap-2 rounded-full bg-zinc-50 py-1 w-[50%] text-[#1171B9]">
                <div>
                  <img src="check-circle2.png" alt="" />
                </div>
                <p className="text-zinc-700 font-medium text-[14px]">
                  ELL Verified
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div>
          <div>
            <img src="/card3.png" alt="" className="sm:w-full" />
          </div>
          <div className="border border-zinc-100 shadow-2xl shadow-zinc-300 rounded-2xl  p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Chiado Charm</h2>
              <img src="Heart.png" alt="" className="w-7" />
            </div>
            <p className="mt-4 text-[15px]">101 Praça do Comércio</p>
            <div className="flex justify-between items-center mt-4">
              <p>430€</p>
              <div className="flex justify-center items-center gap-2 rounded-full bg-zinc-50 py-1 w-[50%] text-[#1171B9]">
                <div>
                  <img src="check-circle2.png" alt="" />
                </div>
                <p className="text-zinc-700 font-medium text-[14px]">
                  ELL Verified
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*Card 4 */}
        <div>
          <div>
            <img src="/card4.png" alt="" className="sm:w-full" />
          </div>
          <div className="border border-zinc-100 shadow-2xl shadow-zinc-300 rounded-2xl  p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Panoramic Penthouse</h2>
              <img src="Heart.png" alt="" className="w-7" />
            </div>
            <p className="mt-4 text-[15px]">234 Castelo São Jorge</p>
            <div className="flex justify-between items-center mt-4">
              <p>800€</p>
              <div className="flex justify-center items-center gap-2 rounded-full bg-zinc-50 py-1 w-[50%] text-[#1171B9]">
                <div>
                  <img src="check-circle2.png" alt="" />
                </div>
                <p className="text-zinc-700 font-medium text-[14px]">
                  ELL Verified
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*Card 5*/}
        <div>
          <div>
            <img src="/card5.png" alt="" className="sm:w-full" />
          </div>
          <div className="border border-zinc-100 shadow-2xl shadow-zinc-300 rounded-2xl  p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Marquês Master</h2>
              <img src="Heart.png" alt="" className="w-7" />
            </div>
            <p className="mt-4 text-[15px]">567 Av. Almirante Reis</p>
            <div className="flex justify-between items-center mt-4">
              <p>445€</p>
              <div className="flex justify-center items-center gap-2 rounded-full bg-zinc-50 py-1 w-[50%] text-[#1171B9]">
                <div>
                  <img src="check-circle2.png" alt="" />
                </div>
                <p className="text-zinc-700 font-medium text-[14px]">
                  ELL Verified
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div>
          <div>
            <img src="/card6.png" alt="" className="sm:w-full" />
          </div>
          <div className="border border-zinc-100 shadow-2xl shadow-zinc-300 rounded-2xl  p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Alfama Hideaway</h2>
              <img src="Heart.png" alt="" className="w-7" />
            </div>
            <p className="mt-4 text-[15px]">789 Beco do Carneiro</p>
            <div className="flex justify-between items-center mt-4">
              <p>700€</p>
              <div className="flex justify-center items-center gap-2 rounded-full bg-zinc-50 py-1 w-[50%] text-[#1171B9]">
                <div>
                  <img src="check-circle2.png" alt="" />
                </div>
                <p className="text-zinc-700 font-medium text-[14px]">
                  ELL Verified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
