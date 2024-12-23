import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <main className="max-w-[1440px] p-0 md:p-5 justify-center items-center mx-auto">
      <section className="grid grid-cols-[1fr_1fr] justify-between">
        {/*Text Section*/}
        <div className="flex flex-col justify-center text-black items-start text-left">
          <h1 className="text-7xl font-bold text-[#044E83]">Governor Sindh</h1>
          <h2 className="text-5xl text-[#044E83]">Kamran Tessori</h2>
          <p className="text-[#2EB6E8]">
            Certified Cloud Applied Generative AI Engineer (GenEng)
          </p>
          <h3 className="text-[#044E83] font-bold">
            Earn up to $5,000 / month
          </h3>
          <h3 className="text-[#044E83] font-bold">
            Now admissions are open in Hyderabad
          </h3>
          <div className="flex gap-10 justify-center items-center">
            <button className="bg-[#044E83] text-white font-bold p-2 md:p-4 px-0 md:px-14 uppercase rounded-md mt-5">
              Apply Now
            </button>
            <div className="text-center">
              <p className="text-2xl font-extrabold text-[#044E83] tracking-tight">
                562,143
              </p>
              <p className="text-sm text-[#044E83] mt-2">
                Accepted Applications
              </p>
            </div>
          </div>
        </div>

        {/*Image section*/}
        <div>
          <Image
            src={"/images/governor.png"}
            alt="Governor Sindh"
            width={800}
            height={800}
          />
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
