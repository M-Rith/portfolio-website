import React from "react";
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
          <strong key={index}>{segment}</strong>
        ) : (
          <span key={index}>{segment}</span>
        )
      )}
    </>
  );
};

export default function EducationComponent() {
  return (
    <section className="education-section">
      <Header title="Education" description="There are list of my education" />

      {EducationData.map((education, index) => (
        <div
          key={education.id}
          className={`flex flex-col  ${
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
          <p className="text-sm pt-2.5 text-gray-600/80">
            <HighlightedText
              text={education.description}
              highlights={education.highlights}
            />
          </p>
        </div>
      ))}
    </section>
  );
}
