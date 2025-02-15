import React from "react";
import Title from "./ui/header";
import ExperiencesData from "@/data/experienes.json";
import ExperienceList from "./Experience/experienceList";

export default function ExperienceComponent() {
  return (
    <div>
      <Title
        title="Work Experiences"
        description="There are list of my work experiences that I have been doing"
      />

      {ExperiencesData.map((experience) => (
        <div className="py-3 md:py-4 lg:py-5 flex flex-col" key={experience.id}>
          <ExperienceList key={experience.id} experience={experience} />
        </div>
      ))}
    </div>
  );
}
