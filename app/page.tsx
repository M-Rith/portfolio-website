"use client";
import AwardComponent from "@/components/award";
import EducationComponent from "@/components/education";
import ExperienceComponent from "@/components/experiences";
import ProductsComponent from "@/components/products";
import WelcomeComponent from "@/components/welcome";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { TbArrowNarrowUp } from "react-icons/tb";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 80% of the page height
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setShowScrollTop(scrolled > (fullHeight - viewportHeight) * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          backgroundColor: "#000000",
        }}
      />
      <WelcomeComponent />
      <hr className="my-10 border-black" />
      <ProductsComponent />
      <hr className="my-10 border-black" />
      <ExperienceComponent />
      <hr className="my-10  border-black" />
      <EducationComponent />
      <hr className="my-10  border-black" />
      <AwardComponent />

      {showScrollTop && (
        <div className="fixed bottom-20 right-6 flex flex-col items-center justify-center">
          <button
            onClick={scrollToTop}
            className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <TbArrowNarrowUp className="w-6 h-6" />
          </button>
          {/* <p className="text-sm text-gray-500 pt-2.5">Going up ?</p> */}
        </div>
      )}
    </div>
  );
}
