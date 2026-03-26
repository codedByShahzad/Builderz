"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    id: "01",
    title: "General construction",
    description: "There are many passages of lorem ipsum available",
    icon: "/images/service1.png",
    href: "/services/general-construction",
  },
  {
    id: "02",
    title: "Property maintenance",
    description: "There are many passages of lorem ipsum available",
    icon: "/images/service2.png",
    href: "/services/property-maintenance",
  },
  {
    id: "03",
    title: "Project management",
    description: "There are many passages of lorem ipsum available",
    icon: "/images/service3.png",
    href: "/services/project-management",
  },
  {
    id: "04",
    title: "Virtual design & build",
    description: "There are many passages of lorem ipsum available",
    icon: "/images/service4.png",
    href: "/services/virtual-design-build",
  },
  {
    id: "05",
    title: "Proconstruction",
    description: "There are many passages of lorem ipsum available",
    icon: "/images/service5.png",
    href: "/services/proconstruction",
  },
];

type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
};

function ServiceCard({
  id,
  title,
  description,
  icon,
  href,
}: ServiceCardProps) {
  return (
    <div className="group relative min-h-[278px] overflow-visible border border-[#f15a00] bg-white px-5 pb-8 pt-8 transition-all duration-300 sm:border-transparent sm:hover:border-[#f15a00] sm:min-h-[286px] sm:px-6 lg:min-h-[280px] xl:min-h-[286px]">
      {/* vertical label */}
      <div className="absolute left-4 top-6 block sm:hidden">
        <span
          className="block text-[24px] font-semibold uppercase leading-none tracking-[0.02em] text-transparent"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            WebkitTextStroke: "1px #dddddd",
          }}
        >
          {`SERVICES - ${id}`}
        </span>
      </div>

      <div className="absolute left-4 top-6 hidden sm:block">
        <span
          className="block  font-semibold uppercase leading-none tracking-[0.02em] text-transparent text-[30px] xl:text-[32px]"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            WebkitTextStroke: "1px #dddddd",
          }}
        >
          {`SERVICES - ${id}`}
        </span>
      </div>

      <div className="relative z-10 ml-[48px] sm:ml-[56px]">
        {/* icon + line */}
        <div className="flex items-center gap-4">
          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#fdf1e8] sm:h-[54px] sm:w-[54px]">
            <div className="transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <Image
                src={icon}
                alt={title}
                width={48}
                height={48}
                className="h-12 w-12 object-contain sm:h-10 sm:w-10"
              />
            </div>
          </div>

          <div className="h-px flex-1 bg-[#e6e6e6]" />
        </div>

        <h3 className="mt-8 max-w-[260px] text-[22px] font-semibold leading-[1.14] tracking-[-0.5px] text-[#171922] sm:text-[27px] xl:text-[28px]">
          {title}
        </h3>

        <p className="mt-4 max-w-[300px] text-[16px] leading-8 text-[#7b7b7b]">
          {description}
        </p>
      </div>

      {/* default arrow desktop */}
      <div className="absolute bottom-0 right-0 hidden translate-x-[-42px] translate-y-1/2 opacity-100 transition-all duration-300 group-hover:opacity-0 md:block">
        <Link
          href={href}
          className="flex h-[50px] w-[50px] items-center justify-center bg-[#ededed] text-[#f15a00]"
          aria-label={`Explore ${title}`}
        >
          <FiArrowUpRight className="text-[17px]" />
        </Link>
      </div>

      {/* hover button desktop */}
      <div className="absolute bottom-0 right-0 hidden translate-x-[-42px] translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 md:block">
        <Link
          href={href}
          className="inline-flex h-[50px] items-center gap-3 bg-[#f15a00] px-6 text-[12px] font-bold uppercase tracking-[0.04em] text-white"
        >
          <span>Explore Service</span>
          <FiArrowUpRight className="text-[17px]" />
        </Link>
      </div>

      {/* mobile full button */}
      <div className="absolute bottom-0 right-0 translate-x-[-20px] translate-y-1/2 md:hidden">
        <Link
          href={href}
          className="inline-flex h-[50px] items-center gap-3 bg-[#f15a00] px-6 text-[12px] font-bold uppercase tracking-[0.04em] text-white"
          aria-label={`Explore ${title}`}
        >
          <span>Explore Service</span>
          <FiArrowUpRight className="text-[17px]" />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] pt-14 sm:pt-16 lg:pt-18 xl:pt-30 pb-70">
      {/* background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/servicebg.png"
          alt="Services background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-50 "
        />
      </div>

      {/* right accent */}
      <div className="absolute right-0 top-28 hidden h-23 w-2 bg-[#f15a00] xl:block" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-7 xl:gap-8">
          {/* intro */}
          <div className="lg:col-span-4">
            <div className="max-w-[430px] pt-1">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/sectionicon.svg"
                  alt="Section icon"
                  width={26}
                  height={14}
                  className="h-auto w-7"
                />
                <span className="text-[13px] font-medium uppercase tracking-[0.04em] text-[#7b7b7b]">
                  What We Do
                </span>
              </div>

              <h2 className="mt-5 max-w-[400px] text-[42px] font-semibold leading-[1.02] tracking-[-1.3px] text-[#171922] sm:text-[50px] lg:text-[38px] xl:text-[52px]">
                Our services that we provide
              </h2>

              <p className="mt-6 max-w-[430px] text-[16px] leading-8 text-[#7b7b7b]">
                We craft unique digital experiences. With more than 7 years of
                expertise we design and code clean
              </p>
            </div>
          </div>

          {/* cards */}
          <div className="lg:col-span-4 mb-4">
            <ServiceCard {...services[0]} />
          </div>

          <div className="lg:col-span-4 mb-4">
            <ServiceCard {...services[1]} />
          </div>

          <div className="lg:col-span-4 mb-4">
            <ServiceCard {...services[2]} />
          </div>

          <div className="lg:col-span-4 mb-4">
            <ServiceCard {...services[3]} />
          </div>

          <div className="lg:col-span-4 mb-4">
            <ServiceCard {...services[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}