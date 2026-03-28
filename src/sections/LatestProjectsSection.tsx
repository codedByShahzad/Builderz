"use client";

import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/src/lib/projectsData";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";

function getProjectCardClasses(index: number) {
  switch (index) {
    case 0:
      return "xl:col-span-7 xl:row-span-2 min-h-[300px] md:min-h-[380px] xl:min-h-[520px]";
    case 1:
    case 2:
      return "xl:col-span-5 min-h-[250px] md:min-h-[255px]";
    case 3:
    case 4:
      return "xl:col-span-6 min-h-[240px] md:min-h-[250px]";
    default:
      return "xl:col-span-6 min-h-[250px]";
  }
}

export default function LatestProjectsSection() {
  const visibleProjects = projectsData.slice(0, 5);

  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#15161c] md:py-28">
      <div className="pointer-events-none absolute bottom-0 right-0 hidden w-[220px] opacity-100 xl:block 2xl:w-[320px]">
        <Image
          src="/images/rightTowerimage.png"
          alt="Tower illustration"
          width={360}
          height={520}
          className="h-auto w-full object-contain object-right-bottom"
        />
      </div>

      <div className="relative mx-auto max-w-400 px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* giant faded background text */}
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden overflow-hidden lg:block">
            <p className="select-none text-center text-[130px] font-semibold leading-none tracking-[-5px] text-black/[0.03] xl:text-[165px]">
              Latest Projects
            </p>
          </div>
           {/* top heading */}
                  <div className="mx-auto max-w-[820px] mt-20 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <Image
                        src="/images/sectionicon.svg"
                        alt="Section icon"
                        width={26}
                        height={14}
                        className="h-auto w-7"
                      />
                      <span className="text-[13px] font-medium uppercase tracking-[0.04em] text-[#7b7b7b]">
                        Latest Projects
                      </span>
                    </div>
          
                    <h2 className="mt-4 text-[34px] font-semibold leading-[1.06] tracking-[-1px] text-[#171922] sm:text-[42px] lg:text-[52px] xl:text-[58px]">
                      Explore Our Latest Projects
                    </h2>
                  </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12 xl:auto-rows-[minmax(240px,auto)]">
          {visibleProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={`group relative block overflow-hidden border border-[#e7e7e7] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f15a00] hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] ${getProjectCardClasses(
                index,
              )}`}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/95 via-[#111318]/55 to-[#111318]/10" />

                <div className="absolute left-0 top-0 h-full w-[4px] bg-[#f15a00]" />

                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-flex rounded-sm bg-[#f15a00] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-md sm:text-[11px]">
                    {project.category}
                  </span>
                </div>

                <div className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-sm border border-[#f15a00] bg-white text-[#f15a00] shadow-md transition-all duration-300 group-hover:bg-[#f15a00] group-hover:text-white">
                  <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5 lg:p-6">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-sm border border-white/15 bg-[#2c3038]/80 px-3 py-2 text-[11px] text-white backdrop-blur-md sm:text-xs">
                    <FiCalendar className="text-[#f15a00]" />
                    <span>Completed: {project.completedDate}</span>
                  </div>

                  <h3
                    className={`max-w-[95%] font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#f15a00] ${
                      index === 0
                        ? "text-[24px] sm:text-[30px] lg:text-[36px]"
                        : "text-[20px] sm:text-[22px] lg:text-[24px]"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mt-2 max-w-[95%] text-white/78 ${
                      index === 0
                        ? "text-[13px] leading-6 sm:text-[15px]"
                        : "text-[13px] leading-6 sm:text-[14px]"
                    }`}
                  >
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
