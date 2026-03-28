"use client";

import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/src/lib/teamData";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiPhoneCall,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import MovingEdge from "../components/MovingEdge";

type TeamSectionProps = {
  limit?: number;
  showButton?: boolean;
  buttonHref?: string;
  buttonText?: string;
  title?: string;
  subtitle?: string;
};

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
  phoneHref: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
};

function TeamCard({ name, role, image, phoneHref, socials }: TeamCardProps) {
  return (
    <div className="group relative overflow-hidden border-3 border-transparent bg-[#f2f2f2] transition-all duration-300 hover:border-[#f7630c]">
      {/* card bg image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/teamCardBg.png"
          alt="Team card background"
          fill
          className="object-cover"
        />
      </div>

      {/* content */}
      <div className="relative z-[2] px-5 pt-5 sm:px-7 sm:pt-7 lg:px-6 lg:pt-6 xl:px-7 xl:pt-7">
        <h3 className="text-[24px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#181a22] sm:text-[28px] lg:text-[26px] xl:text-[30px]">
          {name}
        </h3>

        <p className="mt-3 text-[16px] text-[#7d7d7d] sm:text-[18px] lg:text-[17px]">
          {role}
        </p>

        <div className="mt-5 flex items-center gap-2 sm:gap-3">
          <Link
            href={socials.facebook || "#"}
            aria-label={`${name} Facebook`}
            className="flex h-[34px] w-[34px] items-center justify-center bg-[#ebebeb] text-[15px] text-[#7d7d7d] transition duration-300 hover:bg-[#f7630c] hover:text-white"
          >
            <FiFacebook />
          </Link>

          <Link
            href={socials.twitter || "#"}
            aria-label={`${name} Twitter`}
            className="flex h-[34px] w-[34px] items-center justify-center bg-[#ebebeb] text-[14px] text-[#7d7d7d] transition duration-300 hover:bg-[#f7630c] hover:text-white"
          >
            <FaXTwitter />
          </Link>

          <Link
            href={socials.instagram || "#"}
            aria-label={`${name} Instagram`}
            className="flex h-[34px] w-[34px] items-center justify-center bg-[#ebebeb] text-[15px] text-[#7d7d7d] transition duration-300 hover:bg-[#f7630c] hover:text-white"
          >
            <FiInstagram />
          </Link>
        </div>
      </div>

      {/* member image */}
      <div className="relative z-[2] flex min-h-[220px] items-end justify-center px-3 pt-2 sm:min-h-[260px] sm:px-4 lg:min-h-[280px] xl:min-h-[320px]">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-auto max-h-[290px] w-auto object-contain transition duration-300 group-hover:scale-[1.02] sm:max-h-[330px] lg:max-h-[350px] xl:max-h-[390px]"
        />
      </div>

      {/* phone button */}
      <Link
        href={phoneHref}
        aria-label={`Call ${name}`}
        className="absolute bottom-5 left-5 z-[3] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#f7630c] text-[18px] text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:bottom-6 sm:left-6 sm:h-[50px] sm:w-[50px] sm:text-[20px]"
      >
        <FiPhoneCall />
      </Link>
    </div>
  );
}

export default function TeamSection({
  limit,
  showButton = true,
  buttonHref = "/team",
  buttonText = "VIEW ALL MEMBERS",
  title = "Meet our leadership",
  subtitle = "OUR TEAM",
}: TeamSectionProps) {
  const displayedMembers =
    typeof limit === "number" ? teamMembers.slice(0, limit) : teamMembers;

  return (
    <section className="relative flex  items-center overflow-hidden bg-[#f6f6f6] py-15 sm:py-18 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* top area */}
        <div className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="relative h-[12px] w-[26px] shrink-0">
                <Image
                  src="/images/sectionicon.svg"
                  alt="Section icon"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="text-[12px] uppercase tracking-[0.05em] text-[#7d7d7d]">
                {subtitle}
              </span>
            </div>

            <h2 className="max-w-[650px] text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#16171d] sm:text-[46px] lg:text-[54px] xl:text-[60px]">
              {title}
            </h2>
          </div>

          {showButton && (
            <div className="shrink-0">
              <Link
                href={buttonHref}
                className="inline-flex items-center gap-3 bg-[#f7630c] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.04em] text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-7 sm:py-4"
              >
                {buttonText}
                <FiArrowUpRight className="text-[16px]" />
              </Link>
            </div>
          )}
        </div>

        {/* cards */}
        <div
          className={`grid gap-5 lg:gap-6 ${
            displayedMembers.length === 1
              ? "grid-cols-1"
              : displayedMembers.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          {displayedMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              phoneHref={member.phoneHref}
              socials={member.socials}
            />
          ))}
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
