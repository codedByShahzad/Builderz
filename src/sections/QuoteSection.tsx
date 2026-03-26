"use client";

import Image from "next/image";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import MovingEdge from "../components/MovingEdge";

export default function QuoteSection() {
  return (
    <section className="relative top-[-200px]  z-10  py-0">
      <div className="mx-auto  max-w-[1600px] px-0 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative mx-auto max-w-[1360px] overflow-visible">
          <div className="grid items-end gap-0 px-2 pb-0 pt-4 sm:px-4 lg:grid-cols-[1.34fr_0.66fr] lg:px-0 lg:pt-0">
            {/* LEFT PANEL */}
            <div className="relative z-20 w-full bg-white px-8 py-10 sm:px-10 sm:py-12 lg:min-h-[520px] lg:px-14 lg:py-14 xl:px-16">
               <MovingEdge
                      imageSrc="/images/bartop.png"
                      position="top"
                      speed="normal"
                      height={30}
                    />

              <div className="relative z-10 max-w-[620px] pt-8 lg:max-w-[640px]">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/sectionicon.svg"
                    alt="Section icon"
                    width={26}
                    height={14}
                    className="h-auto w-7"
                  />
                  <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#7b7b7b]">
                    Get Free Quote
                  </span>
                </div>

                <h2 className="mt-5 max-w-[430px] text-[40px] font-semibold leading-[1.03] tracking-[-1px] text-[#171922] text-[40px]">
                  Have a project in mind?
                </h2>

                <form className="mt-10 space-y-4 pr-4 lg:pr-8">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-[58px] w-full border border-transparent bg-[#f1f1f1] px-5 text-[15px] text-[#171922] outline-none transition duration-300 placeholder:text-[#7d7d7d] focus:border-[#f15a00] focus:bg-white"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-[58px] w-full border border-transparent bg-[#f1f1f1] px-5 text-[15px] text-[#171922] outline-none transition duration-300 placeholder:text-[#7d7d7d] focus:border-[#f15a00] focus:bg-white"
                  />

                  <div className="relative">
                    <select
                      defaultValue=""
                      className="h-[58px] w-full appearance-none border border-transparent bg-[#f1f1f1] px-5 pr-12 text-[15px] text-[#7d7d7d] outline-none transition duration-300 focus:border-[#f15a00] focus:bg-white"
                    >
                      <option value="" disabled>
                        Your Inquiry
                      </option>
                      <option>General Construction</option>
                      <option>Property Maintenance</option>
                      <option>Project Management</option>
                      <option>Virtual Design & Build</option>
                      <option>Proconstruction</option>
                    </select>

                    <FiChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[16px] text-[#7d7d7d]" />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-[58px] w-full items-center justify-center gap-3 bg-[#f15a00] px-6 text-[13px] font-bold uppercase tracking-[0.04em] text-white transition duration-300 hover:bg-[#000]"
                  >
                    <span>Submit Now</span>
                    <FiArrowUpRight className="text-[18px]" />
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT TRUCK */}
            <div className="relative z-30 mt-8 flex items-end justify-center lg:-ml-28 lg:mt-0 lg:justify-start xl:-ml-36">
              <div className="relative w-full max-w-[500px] xl:max-w-[1080px]">
                <Image
                  src="/images/rightTruck.png"
                  alt="Construction truck"
                  width={1000}
                  height={1000}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}