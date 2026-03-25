"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FiArrowUpRight, FiArrowUp } from "react-icons/fi";

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-[16px] text-white/70 transition hover:text-[#f15a00]"
    >
      <FiArrowUpRight className="text-[#f15a00] opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      <span>{label}</span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footerbg.png"
          alt="Footer background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-14 sm:px-8 lg:px-10 lg:pt-16">
        {/* TOP */}
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-center lg:justify-between lg:pb-12">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-white.svg"
              alt="Builderz Logo"
              width={190}
              height={50}
              className="h-auto w-38.75 sm:w-45"
            />
          </div>

          <div className="flex w-full max-w-190 flex-col gap-5 lg:items-end">
            <p className="max-w-105 text-base leading-7 text-white/70 sm:text-lg">
              Subscribe for updates and latest news.
            </p>

            <div className="flex w-full max-w-180 flex-col overflow-hidden rounded-md bg-white/8 backdrop-blur-sm sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email..."
                className="h-15 w-full bg-transparent px-5 text-base text-white placeholder:text-white/35 outline-none"
              />
              <button className="inline-flex h-15 shrink-0 items-center justify-center gap-2 bg-[#f15a00] px-6 text-base font-semibold text-white transition hover:bg-[#d94f00] sm:px-8">
                <span>Subscribe</span>
                <FiArrowUpRight className="text-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-5 text-[22px] font-semibold">About Company</h3>
            <p className="max-w-72.5 text-lg leading-10 text-white/65">
              A small business can be better than a big business due to agility
              and adaptability.
            </p>

            <h4
              className="mt-7 text-[30px] font-semibold leading-none text-transparent sm:text-[34px]"
              style={{ WebkitTextStroke: "1px #f15a00" }}
            >
              Since 2000
            </h4>
          </div>

          <div>
            <h3 className="mb-5 text-[22px] font-semibold">Useful Links</h3>
            <div className="flex flex-col gap-5">
              <FooterLink label="About Us" href="#" />
              <FooterLink label="Services" href="#" />
              <FooterLink label="Projects" href="#" />
              <FooterLink label="FAQ’s" href="#" />
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[22px] font-semibold">Contact</h3>
            <div className="space-y-4 text-lg text-white/70">
              <p className="max-w-62.5 leading-9">
                Los Angeles, Street Road 24, NY
              </p>
              <p>support@gmail.com</p>
              <p>+121 551 579 266</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[22px] font-semibold">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: RxCross2, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaFacebookF, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-[#f15a00]"
                  >
                    <Icon size={16} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* SCROLL BUTTON + BOTTOM BAR WRAPPER */}
        <div className="relative border-t border-white/10 pt-6 pb-8 sm:pb-10">
          {/* SCROLL TOP */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="absolute -top-7 right-0 z-20 flex h-13.5 w-13.5 items-center justify-center rounded-full bg-[#f15a00] p-1.25 shadow-[0_12px_30px_rgba(241,90,0,0.30)] transition hover:scale-105 hover:bg-[#d94f00] sm:h-14.5 sm:w-14.5"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-[#f15a00]">
              <FiArrowUp className="text-[20px] sm:text-[22px]" />
            </span>
          </button>

          {/* BOTTOM */}
          <div className="flex flex-col gap-4 pr-0 text-white/60 md:flex-row md:items-center md:justify-between md:pr-24">
            <p className="text-base">© 2026 Builderz. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base">
              <Link href="#" className="transition hover:text-[#f15a00]">
                Privacy
              </Link>
              <Link href="#" className="transition hover:text-[#f15a00]">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}