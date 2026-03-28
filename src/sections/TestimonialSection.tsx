"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  title: string;
  message: string;
  avatar: string;
};

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Aleesha brown.",
    role: "CEO at Construx",
    title: "Best Company!",
    message:
      "Tortor posuere ac ut consequat. Tellusi elem isis etum sag ittis vitae et leo duis ut diam. Odio ut sem nulla phar. Purus sit ame nus mas do eiusmod.",
    avatar: "/images/client1.png",
  },
  {
    id: 2,
    name: "David Morgan.",
    role: "Project Manager",
    title: "Highly Recommended!",
    message:
      "Our experience was smooth from start to finish. The team stayed professional, responsive, and delivered excellent quality with complete attention to detail.",
    avatar: "/images/client2.png",
  },
  {
    id: 3,
    name: "Sophia Lee.",
    role: "Operations Director",
    title: "Outstanding Service!",
    message:
      "They handled everything with precision and strong communication. The final result exceeded expectations and made the entire process stress free for us.",
    avatar: "/images/client3.png",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = useMemo(
    () => testimonials[activeIndex],
    [activeIndex]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-16 sm:py-20 lg:py-24">
      {/* background */}
      <div className="absolute inset-0 z-0 opacity-30 lg:opacity-50">
        <Image
          src="/images/testimonialBg.png"
          alt="Testimonial background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* hook */}
      <div className="pointer-events-none absolute right-0 top-0 z-[1] hidden lg:block lg:right-[20px] xl:right-[30px]">
        <Image
          src="/images/hook.png"
          alt="Construction hook"
          width={180}
          height={520}
          className="h-auto w-[90px] lg:w-[50px] xl:w-[100px] object-contain"
        />
      </div>

      <div className="relative z-[3] mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
          {/* left card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden px-5 py-7 text-white sm:px-8 sm:py-8 lg:h-[270px] lg:px-10 lg:py-8"
          >
            <div className="absolute inset-0">
              <Image
                src="/images/testimonialCard.png"
                alt="Card background"
                fill
                className="object-cover object-right mix-blend-multiply"
              />
            </div>

            <div className="relative z-[2] flex h-full max-w-[420px] flex-col justify-center">
              <h3 className="text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[30px] lg:text-[34px]">
                Have you any questions?
              </h3>

              <p className="mt-3 max-w-[360px] text-[14px] leading-6 text-white/90 sm:text-[15px]">
                Podcasting operational change management inside of making this
                the first true generator.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex w-fit items-center gap-2 bg-white px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.05em] text-[#f7630c] transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:text-[13px]"
              >
                CONTACT WITH US
                <FiArrowUpRight className="text-[16px]" />
              </Link>
            </div>
          </motion.div>

          {/* right content */}
          <div className="relative w-full overflow-hidden pt-1 lg:pt-2 xl:pr-[120px]">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="relative h-[12px] w-[26px] shrink-0">
                  <Image
                    src="/images/sectionicon.svg"
                    alt="Section icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[12px] uppercase tracking-[0.04em] text-[#7e7e7e] sm:text-[13px]">
                  Testimonials
                </span>
              </div>

              <h2 className="max-w-[560px] text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#16171d] sm:text-[40px] lg:text-[46px]">
                Our happy customers
              </h2>
            </motion.div>

            <div className="relative mt-8 min-h-[330px] sm:min-h-[280px] lg:min-h-[270px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, x: 90 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -90 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-[2]"
                >
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
                    <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={activeItem.avatar}
                        alt={activeItem.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="relative min-w-0 flex-1">
                      <h3 className="text-[22px] font-semibold leading-none text-[#1a1b22] sm:text-[24px] lg:text-[26px]">
                        {activeItem.title}
                      </h3>

                      <div className="relative mt-4">
                        {/* quote */}
                        <div className="pointer-events-none absolute right-0 top-[-50px] z-0 opacity-100 sm:right-[8px] xl:right-[-100px]">
                          <Image
                            src="/images/quote.svg"
                            alt="Quote"
                            width={170}
                            height={170}
                            className="h-[70px] w-[70px] object-contain sm:h-[95px] sm:w-[95px] lg:h-[125px] lg:w-[125px]"
                          />
                        </div>

                        <p className="relative z-[2]  pr-[28px] text-[15px] leading-[1.95] text-[#7a7a7a] sm:pr-[48px] sm:text-[16px] lg:pr-[5px]">
                          {activeItem.message}
                        </p>
                      </div>

                      <div className="mt-7 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
                        <span className="text-[18px] font-semibold text-[#1a1b22] sm:text-[20px]">
                          {activeItem.name}
                        </span>
                        <span className="text-[15px] text-[#808080] sm:text-[16px]">
                          {activeItem.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* bottom controls */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="mt-6 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="flex h-[48px] w-[48px] items-center justify-center bg-[#ececec] text-[20px] text-[#f7630c] transition duration-300 hover:bg-[#f7630c] hover:text-white sm:h-[50px] sm:w-[50px]"
                >
                  <FiArrowLeft />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex h-[48px] w-[48px] items-center justify-center bg-[#ececec] text-[20px] text-[#f7630c] transition duration-300 hover:bg-[#f7630c] hover:text-white sm:h-[50px] sm:w-[50px]"
                >
                  <FiArrowRight />
                </button>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative h-[42px] w-[120px] shrink-0 sm:h-[56px] sm:w-[165px]">
                  <Image
                    src="/images/clientgroup.png"
                    alt="Client group"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="text-[20px] font-semibold leading-none text-[#f7630c] sm:text-[24px]">
                    2m+
                  </h4>
                  <p className="mt-2 text-[14px] text-[#7d7d7d] sm:mt-3 sm:text-[16px]">
                    Success Peoples
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}