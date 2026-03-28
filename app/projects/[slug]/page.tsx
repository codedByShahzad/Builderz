import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FiArrowUpRight,
  FiCalendar,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";
import { FaHardHat, FaUserCog, FaIndustry } from "react-icons/fa";
import { projectsData } from "@/src/lib/projectsData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const iconMap = {
  contractor: FaHardHat,
  supervision: FaUserCog,
  steel: FaIndustry,
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projectsData.find((item) => item.slug === slug);

  if (!project) return notFound();

  return (
    <main className="bg-[#f5f5f5] text-[#15161c]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[620px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#15161c]/55" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,22,28,0.9)_0%,rgba(21,22,28,0.58)_42%,rgba(21,22,28,0.18)_100%)]" />

          <div className="absolute left-0 top-0 h-full w-[5px] bg-[#f15a00]" />

          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1320px] items-end px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-block h-[2px] w-14 bg-[#f15a00]" />
                  <span className="text-sm font-medium uppercase tracking-[0.18em] text-white/80">
                    {project.category}
                  </span>
                </div>

                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[68px]">
                  {project.title}
                </h1>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/90">
                  <div className="inline-flex items-center gap-2 border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <FiCalendar className="text-[#f15a00]" />
                    Completed: {project.completedDate}
                  </div>

                  <div className="inline-flex items-center gap-2 border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <FiUsers className="text-[#f15a00]" />
                    Premium Construction Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(21,22,28,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,22,28,0.14) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* LEFT */}
          <div className="lg:col-span-8">
            <div className="border border-[#e7e7e7] bg-white p-6 sm:p-8 lg:p-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-block h-[2px] w-14 bg-[#f15a00]" />
                <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">
                  Overview
                </span>
              </div>

              <h2 className="text-3xl font-semibold text-[#15161c] sm:text-4xl">
                {project.overviewTitle}
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#6d6d6d] sm:text-base">
                {project.overviewText}
              </p>
            </div>

            <div className="mt-8 border border-[#e7e7e7] bg-white p-6 sm:p-8 lg:p-10">
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-block h-[2px] w-14 bg-[#f15a00]" />
                  <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">
                    Features
                  </span>
                </div>

                <h3 className="text-3xl font-semibold text-[#15161c] sm:text-4xl">
                  What was delivered
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {project.features.map((feature, index) => {
                  const Icon = iconMap[feature.icon];

                  return (
                    <div
                      key={index}
                      className="border border-[#ececec] bg-[#fafafa] p-6 transition duration-300 hover:border-[#f15a00]"
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center bg-[#f15a00] text-xl text-white">
                        <Icon />
                      </div>

                      <h4 className="text-lg font-semibold text-[#15161c] transition group-hover:text-[#f15a00]">
                        {feature.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-[#6d6d6d]">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 border border-[#e7e7e7] bg-[#15161c] p-6 sm:p-8 lg:p-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-block h-[2px] w-14 bg-[#f15a00]" />
                <span className="text-sm font-medium uppercase tracking-[0.18em] text-white/70">
                  Testimonial
                </span>
              </div>

              <p className="text-lg leading-8 text-white/85 sm:text-xl">
                “{project.testimonial.quote}”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center bg-[#f15a00] text-xl font-semibold text-white">
                  {project.testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-semibold text-white">
                    {project.testimonial.name}
                  </h5>
                  <p className="text-sm text-white/60">
                    {project.testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="overflow-hidden border border-[#e7e7e7] bg-white">
                <div className="relative h-[260px] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#15161c]">
                    Project Summary
                  </h3>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <FiCheckCircle className="mt-1 text-[#f15a00]" />
                      <div>
                        <p className="text-sm font-medium text-[#15161c]">
                          Category
                        </p>
                        <p className="text-sm text-[#6d6d6d]">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FiCheckCircle className="mt-1 text-[#f15a00]" />
                      <div>
                        <p className="text-sm font-medium text-[#15161c]">
                          Completed Date
                        </p>
                        <p className="text-sm text-[#6d6d6d]">
                          {project.completedDate}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FiCheckCircle className="mt-1 text-[#f15a00]" />
                      <div>
                        <p className="text-sm font-medium text-[#15161c]">
                          Delivery Focus
                        </p>
                        <p className="text-sm text-[#6d6d6d]">
                          Quality, structure, finishing and long-term durability
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-[#f15a00] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#d94f00]">
                    Discuss Similar Project
                    <FiArrowUpRight className="text-lg" />
                  </button>
                </div>
              </div>

              <div className="border border-[#e7e7e7] bg-white p-6">
                <h4 className="text-xl font-semibold text-[#15161c]">
                  Short Description
                </h4>
                <p className="mt-4 text-sm leading-7 text-[#6d6d6d]">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}