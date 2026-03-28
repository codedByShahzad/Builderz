import AboutUsSection from "@/src/sections/AboutUsSection";
import HeroSection from "@/src/sections/HeroSection";
import LatestProjectsSection from "@/src/sections/LatestProjectsSection";
import PartnersSection from "@/src/sections/PartnersSection";
import QuoteSection from "@/src/sections/QuoteSection";
import ServicesSection from "@/src/sections/ServiceSection";
import StatsSection from "@/src/sections/StatsSection";
import TeamSection from "@/src/sections/TeamSection";
import TestimonialSection from "@/src/sections/TestimonialSection";
import WhyChooseUsSection from "@/src/sections/WhyChooseUsSection";
import WorkProcessSection from "@/src/sections/WorkProcessSection";

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
     <PartnersSection />
     <TeamSection limit={3} />
    </div>
  );
}
