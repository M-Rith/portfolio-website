import React from "react";
import { motion } from "framer-motion";
import Header from "./ui/header";
import Title from "./ui/title";
import AwardsData from "@/data/award.json";
import TechnologyCard from "./ui/technologyCard";

export default function AwardComponent() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="award-section"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Header
          title="🏆Awards"
          description="Here is a detailed of my awards."
        />
      </motion.div>

      {AwardsData.map((award, index) => (
        <motion.div
          key={award.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className={`flex flex-col ${
            index !== AwardsData.length - 1
              ? "py-3 md:py-4 lg:py-5"
              : "pt-3 md:pt-4 lg:pt-5"
          }`}
        >
          <Title
            title={award.competition}
            description={award.description}
            date={award.date}
          />
          <div className="flex flex-row gap-2 flex-wrap pt-2.5">
            {award.category.map((category) => (
              <TechnologyCard key={category} technology={category} />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
