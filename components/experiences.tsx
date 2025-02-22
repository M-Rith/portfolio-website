import React from "react";
import { motion } from "framer-motion";
import Title from "./ui/header";
import ExperiencesData from "@/data/experienes.json";
import ExperienceList from "./experiences/experienceList";

export default function ExperienceComponent() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="experiences"
      className="experiences-section"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Title
          title="💻 Work Experiences"
          description="Here are the key responsibilities and tasks I have been handling in my work experience."
        />
      </motion.div>

      {ExperiencesData.map((experience, index) => (
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          key={experience.id}
          className={`flex flex-col ${
            index !== ExperiencesData.length - 1
              ? "py-3 md:py-4 lg:py-5"
              : "pt-3 md:pt-4 lg:pt-5"
          }`}
        >
          <ExperienceList key={experience.id} experience={experience} />
        </motion.div>
      ))}
    </motion.section>
  );
}
