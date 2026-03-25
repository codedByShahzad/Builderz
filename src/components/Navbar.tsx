"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiChevronDown,
  FiClock,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const navLinks = [
  { label: "HOME", href: "/"},
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services", hasDropdown: true },
  { label: "PAGES", href: "/projects", hasDropdown: true },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-t-4 border-[#132320] bg-white">
      <div className="mx-auto max-w-480">
        <div className="flex min-h-22 items-stretch md:min-h-24 xl:min-h-34">
          {/* LEFT LOGO */}
          <div className="flex shrink-0 items-center border-r border-[#d9d9d9] px-4 sm:px-5 lg:w-45 lg:px-5 xl:w-55 xl:px-6 2xl:w-67.5 2xl:px-10">
            <Link href="/" className="block">
              <Image
                src="/images/logo.svg"
                alt="Builderz Logo"
                width={240}
                height={60}
                className="h-auto w-41.25 sm:w-45 lg:w-42.5 xl:w-46.25 2xl:w-55"
                priority
              />
            </Link>
          </div>

          {/* CENTER AREA */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* TOP BAR - ONLY XL AND ABOVE */}
            <div className="hidden h-13 items-center justify-between border-b border-[#d9d9d9] xl:flex">
              <div className="flex h-full items-center ">
                <a
                  href="#"
                  className="flex h-full w-11.5 items-center justify-center border-r border-[#d9d9d9] text-[#7b7b7b] transition hover:text-[#f15a00]"
                >
                  <RxCross2 size={20} />
                </a>
                <a
                  href="#"
                  className="flex h-full w-11.5 items-center justify-center border-r border-[#d9d9d9] text-[#7b7b7b] transition hover:text-[#f15a00]"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  className="flex h-full w-11.5 items-center justify-center border-r border-[#d9d9d9] text-[#7b7b7b] transition hover:text-[#f15a00]"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>

              <div className="flex h-full items-center">
                <div className="flex h-full items-center gap-3  px-4 text-[14px] font-medium text-[#6f6f6f] 2xl:px-6 2xl:text-[15px]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#fff3eb] text-[#f15a00]">
                    <FiClock size={16} />
                  </span>
                  <span>Mon - Sat / 8am : 12pm</span>
                </div>

                <div className="flex h-full items-center gap-3  px-4 text-[14px] font-medium text-[#6f6f6f] 2xl:px-6 2xl:text-[15px]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#fff3eb] text-[#f15a00]">
                    <FiMapPin size={16} />
                  </span>
                  <span>96 Jones Street, New York</span>
                </div>
              </div>
            </div>

            {/* MAIN NAV */}
            <div className="flex min-h-22 items-center justify-between xl:min-h-21">
              {/* DESKTOP NAV */}
              <nav className="hidden h-full min-w-0 lg:flex">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex h-full items-center px-3 text-[13px] font-semibold tracking-wide text-[#6f6f6f] transition hover:text-[#111111] xl:px-5 xl:text-[14px] 2xl:px-7 2xl:text-[15px]"
                  >
                    <span className="flex items-center gap-1.5 2xl:gap-2">
                      {item.label}
                      {item.hasDropdown && (
                        <FiChevronDown
                          size={14}
                          className="translate-y-px text-[#7d7d7d] transition group-hover:text-[#f15a00]"
                        />
                      )}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* MOBILE RIGHT */}
              <div className="flex w-full items-center justify-end px-4 sm:px-6 lg:hidden">
                <button
                  onClick={() => setMobileOpen(true)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#d8d8d8] text-[#111111] transition hover:bg-[#f15a00] hover:text-white"
                  aria-label="Open menu"
                >
                  <FiMenu size={24} />
                </button>
              </div>

              {/* CTA - XL AND ABOVE */}
              <div className="hidden h-full shrink-0 items-center lg:flex">
                <div className="border-l border-[#d9d9d9] px-3 xl:px-6.5">
                  <Link
                    href="/contact"
                    className="inline-flex h-12.5 items-center gap-2 bg-[#f15a00] px-4 text-[12px] font-bold uppercase tracking-wide text-white transition hover:bg-[#d94f00] xl:px-5 2xl:h-15.5 2xl:gap-4 2xl:px-10 2xl:text-[15px]"
                  >
                    <span>GET IN TOUCH</span>
                    <span className="text-[16px] 2xl:text-[20px]">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAR RIGHT PHONE SECTION - ONLY XL */}
          <div className="relative hidden shrink-0 overflow-hidden border-l border-[#d9d9d9] bg-[#f8f8f8] lg:flex xl:w-75 2xl:w-85">
            <div className="absolute inset-y-0 right-0 w-27.5 2xl:w-37.5">
              <Image
                src="/images/navimg.png"
                alt="Construction graphic"
                fill
                sizes="(max-width: 1535px) 110px, 150px"
                className="object-contain object-right"
              />
            </div>

            <div className="relative z-10 flex w-full items-center gap-3 px-5 xl:pr-6 2xl:gap-5 2xl:px-10">
              <div className="flex h-12.5 w-12.5 items-center justify-center bg-[#f15a00] text-white 2xl:h-15 2xl:w-15">
                <FiPhone size={22} className="2xl:text-[26px]" />
              </div>

              <div className="min-w-0">
                <p className="text-[13px] font-medium text-[#6f6f6f] 2xl:text-[15px]">
                  Call us any time
                </p>
                <a
                  href="tel:+1235568824"
                  className="mt-1 block text-[15px] font-extrabold tracking-wide text-[#111111] 2xl:text-[20px]"
                >
                  +123 556 8824
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-60 transition ${
          mobileOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-95 bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#e5e5e5] px-5 py-5">
            <Image
              src="/images/logo.svg"
              alt="Builderz Logo"
              width={170}
              height={44}
              className="h-auto w-37.5"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#d8d8d8] text-[#111111]"
              aria-label="Close menu"
            >
              <FiX size={22} />
            </button>
          </div>

          <div className="border-b border-[#ececec] px-5 py-4">
            <div className="flex items-start gap-3 text-sm text-[#666]">
              <span className="mt-0.5 text-[#f15a00]">
                <FiClock size={18} />
              </span>
              <span>Mon - Sat / 8am : 12pm</span>
            </div>
            <div className="mt-3 flex items-start gap-3 text-sm text-[#666]">
              <span className="mt-0.5 text-[#f15a00]">
                <FiMapPin size={18} />
              </span>
              <span>96 Jones Street, New York</span>
            </div>
          </div>

          <nav className="px-5 py-4">
            <ul className="space-y-1">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-md border border-transparent px-3 py-3 text-[15px] font-semibold text-[#222] transition hover:border-[#f15a00]/20 hover:bg-[#fff6f0]"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && <FiChevronDown size={16} />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-5 pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex h-13.5 items-center justify-center gap-3 bg-[#f15a00] text-[14px] font-bold uppercase tracking-wide text-white"
            >
              <span>GET IN TOUCH</span>
              <span className="text-[18px]">↗</span>
            </Link>
          </div>

          <div className="px-5 pb-8 pt-6">
            <div className="flex items-center gap-4 rounded-lg bg-[#f8f8f8] p-4">
              <div className="flex h-12 w-12 items-center justify-center bg-[#f15a00] text-white">
                <FiPhone size={20} />
              </div>
              <div>
                <p className="text-sm text-[#666]">Call us any time</p>
                <a
                  href="tel:+1235568824"
                  className="text-lg font-extrabold text-[#111111]"
                >
                  +123 556 8824
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-[#ddd] text-[#666] transition hover:border-[#f15a00] hover:text-[#f15a00]"
              >
                <RxCross2 size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-[#ddd] text-[#666] transition hover:border-[#f15a00] hover:text-[#f15a00]"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-[#ddd] text-[#666] transition hover:border-[#f15a00] hover:text-[#f15a00]"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
