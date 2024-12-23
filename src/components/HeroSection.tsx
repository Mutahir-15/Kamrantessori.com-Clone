import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <main className="max-w-[1440px] p-0 md:p-5 justify-center items-center mx-auto">
      <section className="grid grid-cols-2 justify-between">
        {/*Text Section*/}
        <div className="flex flex-col justify-center grid-span-6 text-black items-center">
          <h1 className="text-7xl">Governor Sindh</h1>
          <h2 className="text-5xl">Kamran Tessori</h2>
          <p>Certified Cloud Applied Generative AI Engineer (GenEng)</p>
          <h3>Earn up to $5,000 / month</h3>
          <h3>Now admissions are open in Hyderabad</h3>
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
