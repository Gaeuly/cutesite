"use client";

import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import ScrollLink from "../components/ScrollLink";
import NavButton from "../components/NavButton";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-light-pink text-white p-4 flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold font-pixelify text-black px-5">
        Gaeuly
      </Link>

    <div className="hidden md:flex space-x-4">
      <NavButton href="#about">About</NavButton>
      <NavButton href="#projects">Projects</NavButton>
      <NavButton href="#blog">Blog</NavButton>
      <NavButton href="#contact">Contact</NavButton>
    </div>

      <button
        className="md:hidden flex flex-col space-y-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-1 bg-black"></span>
        <span className="w-6 h-1 bg-black"></span>
        <span className="w-6 h-1 bg-black"></span>
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-light-pink shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Sidebar backgroundColor="#dcd0ff" className="h-full">
          {/* Close button */}
          <button
            className="absolute top-4 left-4 text-black text-xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <Menu className="mt-16 font-pixelify text-black">
            <MenuItem>
              <ScrollLink as="span" href="#about" onClick={() => setIsOpen(false)}>About</ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink as="span" href="#projects" onClick={() => setIsOpen(false)}>Projects</ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink as="span" href="#blog" onClick={() => setIsOpen(false)}>Blog</ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink as="span" href="#contact" onClick={() => setIsOpen(false)}>Contact</ScrollLink>
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </nav>
  );
}