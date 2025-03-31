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
    <div>
      <Title
        title={experience.company}
        description={experience.description}
        date={experience.date}
        // type={experience.type}
      />

      {/* Each Position */}
      <div className="border-l-2 border-gray-200 ml-2">
        {[...experience.position].reverse().map((position) => (
          <div key={position.id} className="flex items-center py-2.5">
            <div className="w-2 h-2 bg-gray-200 rounded-full -ml-[5px]"></div>

            <div className="ml-5">
              <Title
                title={position.name}
                description={position.date}
                type={position.type}
                noIcon={true}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Responsibilities */}
      {/* <div className="flex flex-col pt-2.5">
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
      </div> */}

      {/* Technology Stacks */}
      {/* <div className="flex flex-col pt-2.5">
        <p className="text-sm font-bold">Technology Used</p>
        <div className="flex flex-row gap-2 flex-wrap pt-2.5">
          {experience.technologyStack.map((technology) => (
            <TechnologyCard key={technology} technology={technology} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
