import AboutUsSection from "@/src/sections/AboutUsSection";
import HeroSection from "@/src/sections/HeroSection";
import QuoteSection from "@/src/sections/QuoteSection";
import ServicesSection from "@/src/sections/ServiceSection";
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
    </div>
  );
}
