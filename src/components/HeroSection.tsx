import React from "react";

function HeroSection() {
  return (
    <main className="relative mt-24 sm:mt-16 md:mt-0 p-0 md:p-5 h-screen">
      {/* Background Image with fixed position */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
          backgroundAttachment: "fixed",
        }}
      ></div>
      {/* Content Section */}
      <section className="relative max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center h-full">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-left z-10 p-5 md:p-8 bg-opacity-75 bg-white md:bg-transparent md:text-black">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#044E83]">
            Governor Sindh
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#044E83] mt-2">
            Kamran Tessori
          </h2>
          <p className="text-[#2EB6E8] text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Certified Cloud <br />Applied Generative AI <br />Engineer (GenEng)
          </p>
          <h3 className="text-[#044E83] text-xl sm:text-2xl md:text-3xl font-bold mt-2">
            Earn up to $5,000 / month
          </h3>
          <h3 className="text-[#044E83] text-xl sm:text-2xl md:text-3xl font-bold mt-2">
            Now admissions are open in <br />Hyderabad
          </h3>
          <div className="flex flex-col md:flex-row gap-4 mt-5 items-center">
            <button className="bg-[#044E83] text-white font-bold p-4 rounded-md uppercase">
              Apply Now
            </button>
            <div className="text-center">
              <p className="text-xl font-extrabold text-[#044E83]">
                562,143
              </p>
              <p className="text-sm text-[#044E83]">
                Accepted Applications
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative mt-16 md:mt-0 w-full h-full flex justify-end items-end p-4 md:justify-center md:items-center">
          <img
            src={"/images/governor.png"}
            alt="Governor Sindh"
            className="absolute bottom-0 right-0 md:relative md:bottom-auto md:right-auto md:w-auto md:h-auto"
          />
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
