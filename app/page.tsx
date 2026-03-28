import AboutUsSection from "@/src/sections/AboutUsSection";
import HeroSection from "@/src/sections/HeroSection";
import LatestProjectsSection from "@/src/sections/LatestProjectsSection";
import QuoteSection from "@/src/sections/QuoteSection";
import ServicesSection from "@/src/sections/ServiceSection";
import StatsSection from "@/src/sections/StatsSection";
import TestimonialSection from "@/src/sections/TestimonialSection";
import WhyChooseUsSection from "@/src/sections/WhyChooseUsSection";
import WorkProcessSection from "@/src/sections/WorkProcessSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <HeroSection />
     <AboutUsSection />
     <ServicesSection />
     <QuoteSection />
     <WhyChooseUsSection />
     <WorkProcessSection />
     <LatestProjectsSection />
     <StatsSection />
     <TestimonialSection />
    </div>
  );
}
