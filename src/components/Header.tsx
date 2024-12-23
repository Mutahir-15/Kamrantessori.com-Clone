import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <nav className="relative md:p-6 bg-[#044E83]">
      <div className="max-w-[1440px] md:px-10 mx-auto grid grid-cols-[2fr_1fr] ">
        {/* Logo */}
        <div className="absolute flex justify-center items-center mt-0 md:mt-2">
          <Image src={"/images/logo.png"} alt="Logo" width={90} height={85} />
        </div>

        <div className="flex justify-center text-2xl items-center">
          <p className="text-gray-30 font-bold text-[#B9D8F3] p1">
            Tuition Free Education Program on Latest Technologies
          </p>
        </div>

        <ul className="flex gap-10 justify-center items-center text-[#EBF9F6]">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Apply</Link>
          </li>
          <li>
            <Link href={"/"}>Jobs</Link>
          </li>
          <li>
            <Link href={"/"}>Result</Link>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <Link href={"/"}>Courses</Link>
              <IoIosArrowDown />
            </div>
          </li>
        </ul>
      </div>
    </nav>
    // Mobile Sheet Section
  );
}

export default Header;
