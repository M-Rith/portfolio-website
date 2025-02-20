"use client";
import EducationComponent from "@/components/education";
import ExperienceComponent from "@/components/experiences";
import ProductsComponent from "@/components/products";
import FooterComponent from "@/components/footer";
import WelcomeComponent from "@/components/welcome";
import { motion, useScroll } from "motion/react";
export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="overflow-x-hidden">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          bottom: 5,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "rgb(75 85 99 / 0.8)",
        }}
      />
      <WelcomeComponent />
      <hr className="my-10" />
      <ProductsComponent />
      <hr className="my-10" />
      <ExperienceComponent />
      <hr className="my-10" />
      <EducationComponent />
      <hr className="my-10" />
      <FooterComponent />
    </div>
  );
}
