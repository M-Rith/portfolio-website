import { ExperienceTypes } from "@/types/experiences.type";
import React from "react";
import Title from "../ui/title";

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
      />
      <p className="text-sm pt-2.5 text-gray-600/80">
        {experience.description}
      </p>
    </div>
  );
}
