"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // or any other icon library

import Vector1 from "/icons/Vector1.png";
import icn1 from "/icons/icn1.png";
import icn2 from "/icons/icn2.png";
import icn3 from "/icons/icn3.png";
import icn4 from "/icons/icn4.png";

export default function Navbar_light() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-md">
      {/* Container with responsive padding */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <h3 className="text-2xl font-bold">Bandage</h3>

          {/* Navigation Links – visible on tablet (md) and desktop (lg) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-500 font-bold text-sm">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            {/* You can include the icon inline */}
            <Image src={Vector1} alt="Vector1" width={10} height={12} />
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/pages">Pages</Link>
          </div>

          {/* Right Icons – visible on tablet and desktop */}
          <div className="hidden md:flex items-center gap-3 text-blue-300 font-semibold">
            <div className="flex items-center gap-1 ">
              <Image src={icn1} alt="icn1" width={14} height={14} />
              <Link href="/login">Login / Register</Link>
            </div>
            <Image src={icn2} alt="icn2" width={16} height={16} />
            <div className="flex items-center gap-1 text-xs">
              <Image src={icn3} alt="icn3" width={16} height={16} /> 1
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Image src={icn4} alt="icn4" width={16} height={16} /> 1
            </div>
          </div>

          {/* Hamburger Button – visible on mobile only */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu – shown only when hamburger menu is toggled (screens below md) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md z-50">
          <div className="flex flex-col items-center gap-4 p-4 text-gray-500 font-bold text-sm">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/pages" onClick={() => setIsOpen(false)}>Pages</Link>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="flex flex-col items-center gap-3 p-4 text-blue-300">
            <div className="flex items-center gap-1">
              <Image src={icn1} alt="icn1" width={16} height={16} />
              <Link href="/login" onClick={() => setIsOpen(false)}>Login / Register</Link>
            </div>
            <Image src={icn2} alt="icn2" width={16} height={16} />
            <div className="flex items-center gap-1 text-xs">
              <Image src={icn3} alt="icn3" width={16} height={16} /> 1
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Image src={icn4} alt="icn4" width={16} height={16} /> 1
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
