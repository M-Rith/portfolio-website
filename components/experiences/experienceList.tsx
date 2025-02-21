import { ExperienceTypes } from "@/types/experiences.type";
import React from "react";
import Title from "../ui/title";
import { splitTextWithHighlights } from "@/utils/textHighlighter";
import TechnologyCard from "../ui/technologyCard";
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
          <strong key={index}>{segment}</strong>
        ) : (
          <span key={index}>{segment}</span>
        )
      )}
    </>
  );
};

export default function ExperienceList({ experience }: ExperienceListProps) {
  return (
    <div>
      <Title
        title={experience.company}
        description={experience.position}
        date={experience.date}
        type={experience.type}
      />
      <p className="text-sm pt-2.5 text-[#71717A]">
        <HighlightedText
          text={experience.description}
          highlights={experience.highlights}
        />
      </p>

      {/* Responsibilities */}
      <div className="flex flex-col pt-2.5">
        <p className="text-sm font-bold">Responsibilities</p>
        <div className="flex flex-col pt-2.5">
          <ul className="list-disc pl-4">
            {experience.responsible.map((responsible) => (
              <li key={responsible} className="text-sm text-[#71717A] py-1">
                <HighlightedText
                  text={responsible}
                  highlights={experience.highlights}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technology Stacks */}
      <div className="flex flex-col pt-2.5">
        <p className="text-sm font-bold">Technology Used</p>
        <div className="flex flex-row gap-2 flex-wrap pt-2.5">
          {experience.technologyStack.map((technology) => (
            <TechnologyCard key={technology} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
}
