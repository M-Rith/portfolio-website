import { ExperienceTypes } from "@/types/experiences.type";
import React from "react";
import Title from "../ui/title";
import { Card } from "@/components/ui/card";
interface ExperienceListProps {
  experience: ExperienceTypes;
}

export default function ExperienceList({ experience }: ExperienceListProps) {
  return (
    <div>
      <Title
        title={experience.company}
        description={experience.position}
        date={experience.date}
        type={experience.type}
      />
      <p className="text-sm pt-2.5 text-gray-600/80">
        {experience.description}
      </p>

      {/* Responsibilities */}
      <div className="flex flex-col pt-2.5">
        <p className="text-sm text-gray-600/80 font-bold">Responsibilities</p>
      </div>

      {/* Technology Stacks */}
      <div className="flex flex-col pt-2.5">
        <p className="text-sm font-bold">Technology Used</p>
        <div className="flex flex-row gap-2 flex-wrap py-2.5">
          {experience.technologyStack.map((technology) => (
            <Card
              key={technology}
              className="justify-center flex flex-row items-center px-3 py-1"
            >
              <p className="text-xs ">{technology}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Locations and url */}
    </div>
  );
}
