"use client";

import { MotionConfig } from "framer-motion";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import ValueOutcomes from "@/components/sections/ValueOutcomes";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export default function HomeClient() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <Hero />
        <PainPoints />
        <ValueOutcomes />
        <Services />
        <FeaturedProjects />
        <Testimonials />
        <Pricing />
        <CTA />
      </div>
    </MotionConfig>
  );
}
