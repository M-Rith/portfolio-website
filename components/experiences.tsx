import React from "react";
import Title from "./ui/header";
import ExperiencesData from "@/data/experienes.json";
import ExperienceList from "./experiences/experienceList";

export default function ExperienceComponent() {
  return (
    <div>
      <Title
        title="Work Experiences"
        description="Here are the key responsibilities and tasks I have been handling in my work experience."
      />

      {ExperiencesData.map((experience, index) => (
        <div
          key={experience.id}
          className={`flex flex-col  ${
            index !== ExperiencesData.length - 1
              ? "py-3 md:py-4 lg:py-5"
              : "pt-3 md:pt-4 lg:pt-5"
          }`}
        >
          <ExperienceList key={experience.id} experience={experience} />
        </div>
      ))}
    </div>
  );
}
