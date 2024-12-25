import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

function Header() {
  return (
    <nav className="relative md:p-6 bg-[#044E83]">
      <div className="max-w-[1440px] md:px-10 mx-auto grid grid-rows-1 md:grid-cols-[2fr_1fr]">
        {/* Logo */}
        <div className="absolute flex justify-center items-center mt-0 md:mt-2">
          <Image src={"/images/logo.png"} alt="Logo" width={90} height={85} />
        </div>

        <div className="flex justify-center text-2xl items-center">
          <p className="text-gray-30 font-bold text-[#B9D8F3] p-1">
            <span className="xl:hidden justify-center items-center">Tuition Free Program</span>
            <span className="text-xl md:text-2xl hidden xl:inline">Tuition Free Education Program on Latest Technologies</span>
          </p>
        </div>

        <ul className="hidden md:flex gap-10 justify-center items-center text-[#EBF9F6]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Apply</Link>
          </li>
          <li>
            <Link href="/">Jobs</Link>
          </li>
          <li>
            <Link href="/">Result</Link>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <Link href="/">Courses</Link>
              <IoIosArrowDown />
            </div>
          </li>
        </ul>
        {/* Mobile Menu */}
        <div className="flex md:hidden justify-end items-center p-4">
          <Sheet>
            <SheetTrigger className="cursor-pointer">
              <Menu className="w-6 h-6 text-[#EBF9F6]" aria-label="Open menu" />
            </SheetTrigger>
            <SheetContent className="bg-[#044E83] p-6">
              <ul className="flex flex-col gap-4 justify-center items-center text-[#EBF9F6]">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Apply</Link>
                </li>
                <li>
                  <Link href="/">Jobs</Link>
                </li>
                <li>
                  <Link href="/">Result</Link>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <Link href="/">Courses</Link>
                    <IoIosArrowDown />
                  </div>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Header;
