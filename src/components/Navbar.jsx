"use client";

import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLinks } from "./NavLinks";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 px-5 lg:px-8 xl:px-9 py-4 z-50 bg-[url('/header-gradient.png')] bg-bottom">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="uppercase font-bold text-lg tracking-wider">
          Abanoub
          <span className="w-1.5 h-1.5 bg-red-500/90 mx-1 rounded-full inline-block"></span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          {links.map((link) => (
            <li key={link.path}>
              <Link className="font-ovo" href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-4">
          <button>
            <FaMoon className="size-7" />
          </button>
          <Link
            href={"/contact"}
            className="hidden lg:block px-8 py-2 border border-gray-500 rounded-full font-ovo"
          >
            Contact <FiArrowUpRight className="inline text-lg" />
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <IoMdClose className="size-7" />
            ) : (
              <CiMenuFries className="size-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-72 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 bg-white shadow-sm bg-opacity-50 rounded-lg p-4 text-lg border-2 border-gray-200">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                className="font-ovo hover:bg-slate-200 block p-2 rounded-lg duration-300"
                href={link.path}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={"/contact"}
              className="font-ovo hover:bg-slate-200 block p-2 rounded-lg duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact <FiArrowUpRight className="inline text-lg" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
