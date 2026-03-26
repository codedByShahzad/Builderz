"use client";

import Image from "next/image";
import MovingEdge from "../components/MovingEdge";

const leftFeatures = [
  {
    title: "Technology",
    description:
      "We are expert your all work is very nice waiting for next project.",
    icon: "/images/why1.svg",
  },
  {
    title: "Core Planning",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined",
    icon: "/images/why2.svg",
  },
  {
    title: "Project Result",
    description:
      "Making this the first true generator on the Internet uses a dictionary",
    icon: "/images/why3.svg",
  },
];

const rightFeatures = [
  {
    title: "Trusted Clients",
    description:
      "Passage of Lorem Ipsum, you need to be sure there isn't anything",
    icon: "/images/why4.svg",
  },
  {
    title: "Skilled Team",
    description:
      "We are expert your all work is very nice waiting for next project.",
    icon: "/images/why5.svg",
  },
  {
    title: "Save Money",
    description:
      "We are expert your all work is very nice waiting for next project.",
    icon: "/images/why6.svg",
  },
];

type FeatureItemProps = {
  title: string;
  description: string;
  icon: string;
  align?: "left" | "right";
};

function FeatureItem({
  title,
  description,
  icon,
  align = "left",
}: FeatureItemProps) {
  const isLeft = align === "left";

  return (
    <div
      className={`group flex items-start gap-4 ${
        isLeft ? "lg:justify-end" : "lg:justify-start"
      }`}
    >
      {isLeft && (
        <div className="max-w-[280px] text-left lg:text-right">
          <h3 className="text-[22px] font-semibold leading-none text-[#171922] transition duration-300 group-hover:text-[#f15a00] sm:text-[24px] xl:text-[26px]">
            {title}
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-[#7b7b7b] sm:text-[16px]">
            {description}
          </p>
        </div>
      )}

      <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center transition duration-300 group-hover:scale-[1.05] sm:h-[64px] sm:w-[64px]">
        <div className="transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
        </div>
      </div>

      {!isLeft && (
        <div className="max-w-[280px] text-left">
          <h3 className="text-[22px] font-semibold leading-none text-[#171922] transition duration-300 group-hover:text-[#f15a00] sm:text-[24px] xl:text-[26px]">
            {title}
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-[#7b7b7b] sm:text-[16px]">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="relative top-[-100px] overflow-hidden py-10 sm:py-12 lg:py-14 xl:py-16 ">
       <MovingEdge
              imageSrc="/images/bartop.png"
              position="bottom"
              speed="normal"
              height={30}
            />
      {/* giant faded background text */}
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden overflow-hidden lg:block">
        <p className="select-none text-center text-[130px] font-semibold leading-none tracking-[-5px] text-black/[0.03] xl:text-[165px]">
          Why Choose Us
        </p>
      </div>

      {/* right orange accent */}
      <div className="absolute right-0 top-44 hidden h-20 w-2 bg-[#f15a00] xl:block" />


      <div className="relative z-10 mx-auto max-w-[1600px] pb-20 px-4 sm:px-8 lg:px-10">
        {/* top heading */}
        <div className="mx-auto max-w-[820px] text-center">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/images/sectionicon.svg"
              alt="Section icon"
              width={26}
              height={14}
              className="h-auto w-7"
            />
            <span className="text-[13px] font-medium uppercase tracking-[0.04em] text-[#7b7b7b]">
              Why Choose Us
            </span>
          </div>

          <h2 className="mt-4 text-[34px] font-semibold leading-[1.06] tracking-[-1px] text-[#171922] sm:text-[42px] lg:text-[52px] xl:text-[58px]">
            High Quality Innovate Design
          </h2>
        </div>

        {/* main layout */}
        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_0.72fr_1fr] lg:gap-4 xl:mt-10 xl:gap-8">
          {/* left features */}
          <div className="space-y-8 lg:space-y-10 xl:space-y-12">
            {leftFeatures.map((item) => (
              <FeatureItem
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                align="left"
              />
            ))}
          </div>

          {/* center image */}
          <div className="order-first mx-auto w-full max-w-[220px] lg:order-none lg:max-w-[260px] xl:max-w-[300px]">
            <Image
              src="/images/WhyChooseUsImage.png"
              alt="Why Choose Us"
              width={300}
              height={420}
              priority
              className="h-auto w-full object-contain"
            />
          </div>

          {/* right features */}
          <div className="space-y-8 lg:space-y-10 xl:space-y-12">
            {rightFeatures.map((item) => (
              <FeatureItem
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                align="right"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}