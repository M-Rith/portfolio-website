import React from "react";
import { motion } from "framer-motion";
import EducationData from "@/data/education.json";
import { splitTextWithHighlights } from "@/utils/textHighlighter";
import Header from "./ui/header";
import Title from "./ui/title";

const HighlightedText = ({
  text,
  highlights,
}: {
  text: string;
  highlights?: string[];
}) => {
  const segments = splitTextWithHighlights(text, highlights);

  return (
    <>
      {segments.map(({ segment, isHighlighted }, index) =>
        isHighlighted ? (
          <strong className="text-black" key={index}>
            {segment}
          </strong>
        ) : (
          <span key={index}>{segment}</span>
        )
      )}
    </>
  );
};

export default function EducationComponent() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="education-section"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Header
          title="🎓Education"
          description="Here is a detailed list of my educational background and academic qualifications."
        />
      </motion.div>

      {EducationData.map((education, index) => (
        <motion.div
          key={education.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className={`flex flex-col ${
            index !== EducationData.length - 1
              ? "py-3 md:py-4 lg:py-5"
              : "pt-3 md:pt-4 lg:pt-5"
          }`}
        >
          <Title
            title={education.school}
            description={education.degree}
            date={education.dates}
          />
          <p className="text-sm pt-2.5 text-[#71717A]">
            <HighlightedText
              text={education.description}
              highlights={education.highlights}
            />
          </p>
        </motion.div>
      ))}
    </motion.section>
  );
}
