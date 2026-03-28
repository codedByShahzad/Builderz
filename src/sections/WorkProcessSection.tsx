"use client";

import Image from "next/image";

const processSteps = [
  {
    id: "01",
    title: "Meet and consultant about project",
    description:
      "Industry standard dummy text took since the when an unknown",
  },
  {
    id: "02",
    title: "Product design and planning",
    description:
      "Known printer took a galley of type and scrambled it to make",
  },
  {
    id: "03",
    title: "Testing and quality control",
    description:
      "It has survived not only centuries also the leap into electronic",
  },
  {
    id: "04",
    title: "Final assembly and project handover",
    description:
      "Electronic typesetting conta the popularised in the 1960s",
  },
];

function StepCard({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative bg-white px-6 pb-8 pt-7 border border-transparent shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[#f15a00] hover:-translate-y-2 sm:px-7 sm:pb-9 sm:pt-8">
      
      {/* STEP HEADER */}
      <div className="flex items-center gap-3">
        <div className="flex h-[50px] w-[50px] items-center justify-center bg-[#11141c] text-[16px] font-semibold text-white transition-all duration-300 group-hover:bg-[#f15a00]">
          {id}
        </div>

        <span className="text-[22px] font-semibold uppercase tracking-[-0.4px] text-[#d8d8d8] sm:text-[24px]">
          Step
        </span>
      </div>

      {/* TITLE */}
      <h3 className="mt-8 max-w-[250px] text-[24px] font-semibold leading-[1.35] tracking-[-0.5px] text-[#171922] transition-colors duration-300 group-hover:text-[#f15a00]">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-5 max-w-[260px] text-[16px] leading-8 text-[#7b7b7b]">
        {description}
      </p>
    </div>
  );
}

export default function WorkProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] pt-0">
      {/* DARK TOP */}
      <div className="relative">
        <div className="relative min-h-[540px] overflow-hidden bg-[#11141c] sm:min-h-[580px] lg:min-h-[600px]">
          
          {/* BG IMAGE */}
          <div className="absolute inset-0">
            <Image
              src="/images/workProcessbg.png"
              alt="Work process background"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-[#11141c]/60" />
          </div>

          {/* TOP RULER */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-10 opacity-20">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "18px 100%",
              }}
            />
          </div>

          {/* ORANGE SHAPES */}
          <div
            className="absolute left-1/2 top-0 hidden h-[54px] w-[360px] -translate-x-1/2 bg-[#f15a00] lg:block"
            style={{
              clipPath: "polygon(0 0, 100% 0, 84% 100%, 0 100%)",
            }}
          />

          <div className="absolute right-0 top-0 hidden h-24 w-2 bg-[#f15a00] xl:block" />

          <div
            className="absolute bottom-0 left-0 h-[42px] w-[88px] bg-[#f15a00] sm:h-[48px] sm:w-[110px]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 84% 100%, 0 100%)",
            }}
          />

          {/* HEADER */}
          <div className="relative z-10 mx-auto max-w-[1600px] px-4 pb-44 pt-20 sm:px-8 sm:pb-48 sm:pt-24 lg:px-10">
            <div className="max-w-[520px]">
              <div className="flex items-center gap-3">
                  <Image
                                            src="/images/sectionicon.svg"
                                            alt="Section icon"
                                            width={26}
                                            height={14}
                                            className="h-auto w-7"
                                          />
                <span className="text-[13px] font-medium uppercase tracking-[0.04em] text-white/80">
                  Work Process
                </span>
              </div>

              <h2 className="mt-6 text-[42px] font-semibold leading-[1.08] tracking-[-1.2px] text-white sm:text-[54px] lg:text-[64px]">
                Our services that we provide
              </h2>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="relative z-20 mx-auto -mt-32 max-w-[1600px] px-4 sm:px-8 lg:-mt-36 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-7">
            {processSteps.map((step) => (
              <StepCard key={step.id} {...step} />
            ))}
          </div>
        </div>

        {/* TRUCK */}
        <div className="pointer-events-none absolute bottom--[20px] right-0 w-[220px] z-10000000 sm:w-[280px] lg:w-[320px] hidden md:flex">
          <Image
            src="/images/orangeTruck.png"
            alt="Orange excavator"
            width={300}
            height={300}
            className="h-auto w-full object-contain object-right-bottom"
          />
        </div>
      </div>

      {/* BOTTOM SPACE */}
      <div className="h-[92px] bg-[#f3f3f3] sm:h-[100px] lg:h-[110px]" />
    </section>
  );
}