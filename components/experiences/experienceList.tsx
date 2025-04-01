import { ExperienceTypes } from "@/types/experiences.type";
import React from "react";
import Title from "../ui/title";
import { splitTextWithHighlights } from "@/utils/textHighlighter";
import TechnologyCard from "../ui/technologyCard";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";
import { motion } from "framer-motion";

interface ExperienceListProps {
  experience: ExperienceTypes;
}

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

export default function ExperienceList({ experience }: ExperienceListProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Title
          title={experience.company}
          description={experience.description}
          date={experience.date}
          type={experience.location}
        />
      </motion.div>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {experience.position.map((position, index) => (
          <TimelineItem key={position.id}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="mb-3 md:mb-4 lg:mb-5"
              >
                <Title
                  title={position.name}
                  description={position.description}
                  type={position.type}
                  noIcon={true}
                  date={position.date}
                />

                <div className="flex flex-col pt-2.5">
                  <p className="text-sm font-bold">Responsibilities</p>
                  <ul className="list-disc pl-4">
                    {position.jobResponsible.map((responsible) => (
                      <li
                        key={responsible}
                        className="text-sm text-[#71717A] py-1"
                      >
                        <HighlightedText
                          text={responsible}
                          highlights={experience.highlights}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col pt-2.5">
                  <p className="text-sm font-bold">Technology Used</p>
                  <div className="flex flex-row gap-2 flex-wrap pt-2.5">
                    {position.technologyStack.map((technology) => (
                      <TechnologyCard
                        key={technology}
                        technology={technology}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  );
}
