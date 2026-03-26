"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import MovingEdge from "../components/MovingEdge";

const features = [
  {
    icon: "/images/missionicon.svg",
    title: "Our Mission",
    description:
      "We craft unique digital experiences. With more years of expertise we design",
  },
  {
    icon: "/images/visionicon.svg",
    title: "Our Vision",
    description:
      "We craft unique digital experiences. With more years of expertise we design",
  },
];

const checklist = [
  "Providing Solutions For Construction, Management",
  "Engineers design and build the structure",
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#ffff] py-14 sm:py-16 lg:flex lg:min-h-screen lg:items-center lg:py-28">
      {/* right tower decoration */}
      <div className="pointer-events-none absolute bottom-0 right-0 hidden w-[270px] xl:block 2xl:w-[360px]">
        <Image
          src="/images/rightTowerimage.png"
          alt="Tower illustration"
          width={360}
          height={520}
          className="h-auto w-full object-contain object-right-bottom"
        />
      </div>

      {/* orange accents */}
      <div className="absolute right-0 top-5 hidden h-20 w-2 bg-[#f15a00] xl:block" />
      <div className="absolute left-[41.2%] top-[15%] hidden h-38 w-4 bg-[#f15a00] lg:block xl:left-[41.4%] 2xl:left-[41.7%]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-14 2xl:gap-18">
          {/* RIGHT SIDE - on top only on small devices */}
          <div className="relative order-1 w-full max-w-[650px] lg:order-2 lg:ml-auto xl:max-w-[700px]">
            {/* heading badge */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/sectionicon.svg"
                alt="Section icon"
                width={26}
                height={14}
                className="h-auto w-7"
              />
              <span className="text-[13px] font-medium uppercase tracking-[0.04em] text-[#7b7b7b]">
                About Us
              </span>
            </div>

            <h2 className="mt-5 max-w-[560px] text-[34px] font-semibold leading-[1.05] tracking-[-1.3px] text-[#171922] sm:text-[42px] md:text-[50px] lg:text-[58px] xl:text-[64px]">
              We build everything that you need
            </h2>

            <p className="mt-6 max-w-[590px] text-[17px] leading-8 text-[#7b7b7b] sm:text-[18px] lg:text-[17px] xl:text-[18px] xl:leading-9">
              We craft unique digital experiences. With more than 7 years of
              expertise, we design and code clean websites.
            </p>

            {/* checklist */}
            <div className="mt-8 space-y-4">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#f15a00]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f15a00]" />
                  </span>
                  <p className="text-[17px] leading-8 text-[#2a2d35]">{item}</p>
                </div>
              ))}
            </div>

            {/* mission / vision */}
            <div className="mt-8 space-y-6 sm:mt-10">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 sm:gap-5"
                >
                  {/* ICON BOX */}
                  <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center bg-[#ebebeb] transition duration-500 group-hover:bg-[#fff1e8] sm:h-[80px] sm:w-[80px]">
                    <div className="transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={42}
                        height={42}
                        className="h-15 w-15 object-contain"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="pt-0.5 transition duration-300">
                    <h3 className="text-[22px] font-semibold leading-none text-[#171922] transition duration-300 group-hover:text-[#f15a00] sm:text-[24px] xl:text-[26px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[380px] text-[16px] leading-8 text-[#7b7b7b] transition duration-300 group-hover:text-[#f15a00] sm:text-[17px] xl:text-[18px] xl:leading-9">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 sm:mt-10">
              <Link
                href="/about"
                className="inline-flex h-[56px] items-center gap-3 bg-[#171922] px-6 text-[12px] font-bold uppercase tracking-[0.05em] text-white transition duration-300 hover:bg-[#f15a00] sm:h-[60px] sm:px-7 sm:text-[13px]"
              >
                <span>Explore Our Company</span>
                <FiArrowUpRight className="text-[18px]" />
              </Link>
            </div>
          </div>

          {/* LEFT SIDE */}
          <div className="relative order-2 mx-auto w-full max-w-[620px] lg:order-1 lg:mx-0">
            <div className="relative w-full max-w-[470px] sm:max-w-[520px] lg:max-w-[500px] xl:max-w-[520px]">
              <Image
                src="/images/aboutimage.png"
                alt="Construction team"
                width={520}
                height={650}
                className="h-auto w-full object-cover"
                priority
              />

              {/* floating client card */}
              <div className="absolute bottom-[-34px] right-[-10px] w-[72%] max-w-[260px] border-4 bg-[#f15a00] px-5 py-5 text-white  sm:bottom-[-38px] sm:right-[-24px] sm:max-w-[280px] sm:px-6 sm:py-6 lg:bottom-[-32px] lg:right-[-34px] lg:max-w-[300px] xl:max-w-[320px]">
                <h3 className="text-[40px] font-light leading-none sm:text-[48px] xl:text-[56px]">
                  1.2k
                </h3>

                <p className="mt-3 text-[15px] font-medium text-white sm:text-[16px] xl:text-[17px]">
                  Happy Customers
                </p>

                <div className="mt-7">
                  <div
                    className="h-6 w-full opacity-85"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(255,255,255,0.9) 0 2px, transparent 2px 10px)",
                      maskImage:
                        "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                    }}
                  />
                  <div
                    className="mt-1 h-6 w-full opacity-85"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(255,255,255,0.9) 0 2px, transparent 2px 10px)",
                      maskImage:
                        "linear-gradient(to right, black 0%, black 58%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, black 0%, black 58%, transparent 100%)",
                    }}
                  />
                </div>

                <div className="mt-7">
                  <Image
                    src="/images/clientgroup.png"
                    alt="Client group"
                    width={190}
                    height={52}
                    className="h-auto w-[145px] sm:w-[165px] xl:w-[185px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MovingEdge
              imageSrc="/images/bartop.png"
              position="bottom"
              speed="normal"
              height={30}
            />
    </section>
  );
}