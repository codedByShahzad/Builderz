"use client";

import MovingEdge from "../components/MovingEdge";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3]">
      <MovingEdge
        imageSrc="/images/bartop.png"
        position="top"
        speed="normal"
        height={30}
      />

      {/* top ruler line */}
      <div className="absolute left-0 right-0 top-0 z-[5] h-6 opacity-30">
        <div
          className="h-full w-full bg-repeat-x"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "18px 100%",
          }}
        />
      </div>

      <div className="relative min-h-[90vh]">
        {/* FULL BACKGROUND LAYOUT */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT BG */}
          <div
            className="relative lg:col-span-7"
            style={{
              backgroundImage: "url('/images/project4.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.52))]" />

            {/* orange angled layer */}
            <div
              className="absolute inset-y-0 left-0 w-[36%] bg-[#f15a00]/10"
              style={{
                clipPath: "polygon(0 0, 48% 0, 82% 100%, 0 100%)",
              }}
            />

            {/* subtle grid texture */}
            <div className="absolute inset-0 opacity-[0.07]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
            </div>
          </div>

          {/* RIGHT BG */}
          <div
            className="relative hidden lg:col-span-5 lg:block"
            style={{
              backgroundImage: "url('/images/heroimg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-0 left-0 top-0 z-10 w-[4px] bg-[#f15a00]" />

            <div
              className="absolute right-0 top-0 h-full w-[18%] bg-[#f15a00]"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 30% 100%, 76% 0)",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-black/5" />
          </div>
        </div>

        {/* MOBILE BG IMAGE */}
        <div
          className="absolute inset-0 block lg:hidden"
          style={{
            backgroundImage: "url('/images/project4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/70 to-black/48" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10),rgba(0,0,0,0.58))]" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/35 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[95vh] max-w-400 px-4 sm:px-8 lg:min-h-[860px] lg:px-10">
          <div className="grid w-full grid-cols-1 lg:grid-cols-12">
            {/* LEFT CONTENT */}
            <div className="flex min-h-[95vh] items-center py-14 sm:py-20 lg:col-span-7 lg:min-h-[860px] lg:items-center lg:py-28">
              <div className="flex w-full flex-col  justify-between lg:block">
                {/* upper content */}
                <div className="w-full max-w-[760px]">
                 

                  <h1 className="mt-6 max-w-[680px] text-center text-[52px] font-semibold leading-[0.94] tracking-[-1.8px] text-white sm:text-[60px] md:text-left md:text-[68px] lg:text-[78px] xl:text-[88px]">
                    Build your
                    <span className="block text-[#f15a00]">dream buildings</span>
                    for the future
                  </h1>

                  <p className="mx-auto mt-7 max-w-[700px] text-center text-[17px] leading-8 text-white/82 sm:text-[18px] md:mx-0 md:mt-6 md:text-left md:text-[16px] lg:text-[17px]">
                    We deliver premium construction and architectural solutions
                    with precision, innovation, and reliability — helping turn
                    ideas into durable, modern spaces built for the future.
                  </p>

                  {/* buttons */}
                  <div className="mt-9 flex flex-row flex-wrap items-center justify-center gap-3 md:mt-8 md:justify-start">
                    <Link
                      href="/contact"
                      className="inline-flex h-[52px] min-w-[168px] items-center justify-center gap-2.5 rounded-md bg-[#f15a00] px-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_14px_35px_rgba(241,90,0,0.28)] transition duration-300 hover:-translate-y-[2px] hover:bg-[#d84d00] sm:h-[56px] sm:min-w-[190px] sm:px-7 sm:text-[13px]"
                    >
                      Discover More
                      <FiArrowUpRight className="text-[17px]" />
                    </Link>

                    <Link
                      href="/projects"
                      className="inline-flex h-[52px] min-w-[168px] items-center justify-center gap-2.5 rounded-md border border-white/15 bg-white/10 px-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md transition duration-300 hover:-translate-y-[2px] hover:bg-white/15 sm:h-[56px] sm:min-w-[190px] sm:px-7 sm:text-[13px]"
                    >
                      View Projects
                      <FiArrowUpRight className="text-[17px]" />
                    </Link>
                  </div>
                </div>

                {/* stats */}
                <div className="mt-10 md:mt-8 lg:mt-8">
                  {/* mobile: fixed at bottom area of hero content */}
                  <div className="grid grid-cols-3 gap-2.5 md:hidden">
                    <div className="rounded-md border border-white/10 bg-white/8 px-2.5 py-4 text-center backdrop-blur-md">
                      <h3 className="text-[24px] font-semibold leading-none text-white">
                        25+
                      </h3>
                      <p className="mt-2 text-[11px] leading-4 text-white/68">
                        Years of experience
                      </p>
                    </div>

                    <div className="rounded-md border border-white/10 bg-white/8 px-2.5 py-4 text-center backdrop-blur-md">
                      <h3 className="text-[24px] font-semibold leading-none text-white">
                        480+
                      </h3>
                      <p className="mt-2 text-[11px] leading-4 text-white/68">
                        Projects delivered
                      </p>
                    </div>

                    <div className="rounded-md border border-white/10 bg-white/8 px-2.5 py-4 text-center backdrop-blur-md">
                      <h3 className="text-[24px] font-semibold leading-none text-white">
                        99%
                      </h3>
                      <p className="mt-2 text-[11px] leading-4 text-white/68">
                        Satisfaction rate
                      </p>
                    </div>
                  </div>

                  {/* tablet and above */}
                  <div className="hidden grid-cols-3 gap-2.5 sm:gap-4 md:grid md:max-w-[640px]">
                    <div className="rounded-md border border-white/10 bg-white/8 px-3 py-4 text-center backdrop-blur-md sm:px-4 sm:py-5">
                      <h3 className="text-[24px] font-semibold leading-none text-white sm:text-[28px]">
                        25+
                      </h3>
                      <p className="mt-2 text-[11px] leading-4 text-white/68 sm:text-[12px] sm:leading-5">
                        Years of experience
                      </p>
                    </div>

                    <div className="rounded-md border border-white/10 bg-white/8 px-3 py-4 text-center backdrop-blur-md sm:px-4 sm:py-5">
                      <h3 className="text-[24px] font-semibold leading-none text-white sm:text-[28px]">
                        480+
                      </h3>
                      <p className="mt-2 text-[11px] leading-4 text-white/68 sm:text-[12px] sm:leading-5">
                        Projects delivered
                      </p>
                    </div>

                    <div className="rounded-md border border-white/10 bg-white/8 px-3 py-4 text-center backdrop-blur-md sm:px-4 sm:py-5">
                      <h3 className="text-[24px] font-semibold leading-none text-white sm:text-[28px]">
                        99%
                      </h3>
                      <p className="mt-2 text-[11px] leading-4 text-white/68 sm:text-[12px] sm:leading-5">
                        Satisfaction rate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT EMPTY COLUMN */}
            <div className="hidden lg:col-span-5 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}