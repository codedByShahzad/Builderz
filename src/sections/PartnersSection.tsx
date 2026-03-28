"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { id: 1, logo: "/images/partner1.svg", alt: "Partner 1" },
  { id: 2, logo: "/images/partner2.svg", alt: "Partner 2" },
  { id: 3, logo: "/images/partner3.svg", alt: "Partner 3" },
  { id: 4, logo: "/images/partner4.svg", alt: "Partner 4" },
  { id: 5, logo: "/images/partner5.svg", alt: "Partner 5" },
  { id: 6, logo: "/images/partner1.svg", alt: "Partner 5" },
];

export default function PartnersSection() {
  return (
    <section className="relative overflow-hidden bg-[#11151d]">
      {/* background image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/project4.png"
          alt="Partners background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* dark overlay */}
      <div className="absolute inset-0 z-[1] bg-[#0f1724]/78" />

      {/* left warm overlay */}
      <div className="absolute inset-y-0 left-0 z-[1] w-[26%] bg-gradient-to-r from-[#f7630c]/25 to-transparent" />

      {/* right tower */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-[2] w-[90px] sm:w-[120px] md:w-[150px] lg:w-[175px] xl:w-[210px] hidden lg:block">
        <Image
          src="/images/orangeTower.png"
          alt="Orange tower"
          width={260}
          height={720}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative z-[3] mx-auto flex min-h-[320px] w-full max-w-[1320px] items-center px-4 py-14 sm:min-h-[380px] sm:px-6 sm:py-16 lg:min-h-[450px] lg:px-8 lg:py-20">
        <div className="w-full lg:pr-[120px] xl:pr-[180px]">
          
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-[900px] text-center"
          >
            <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4">
              <div className="relative h-[22px] w-[22px] shrink-0">
                <Image
                  src="/images/sectionicon.svg"
                  alt="Section icon"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="text-[12px] uppercase tracking-[0.05em] text-white/85 sm:text-[13px]">
                HAPPY CLIENTS
              </span>
            </div>

            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[42px] md:text-[50px] lg:text-[60px]">
              Our trusted partners
            </h2>
          </motion.div>

          {/* logos */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mx-auto mt-10 max-w-[1180px] sm:mt-12 lg:mt-14"
          >

            {/* MOBILE + TABLET */}
            <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:hidden">
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  className={[
                    "flex min-h-[100px] items-center justify-center px-4",
                    index % 2 === 0 ? "border-r border-white/10" : "",
                    "sm:border-r",
                    index === 2 ? "sm:border-r-0" : "",
                  ].join(" ")}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={260}
                    height={140}
                    className="h-auto max-h-[70px] w-auto max-w-[170px] object-contain opacity-95 sm:max-h-[85px] sm:max-w-[190px]"
                  />
                </div>
              ))}
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:grid lg:grid-cols-6">
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  className={`flex min-h-[130px] items-center justify-center px-6 ${
                    index !== partners.length - 1
                      ? "border-r border-white/10"
                      : ""
                  }`}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={260}
                    height={140}
                    className="h-auto max-h-[95px] w-auto max-w-[220px] object-contain opacity-95 xl:max-h-[110px] xl:max-w-[250px]"
                  />
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}