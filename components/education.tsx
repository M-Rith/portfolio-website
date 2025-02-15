import React from "react";
import EducationData from "@/data/education.json";
import { splitTextWithHighlights } from "@/utils/textHighlighter";

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
    <div>
      <h1 className="text-lg font-bold">Education</h1>

      {EducationData.map((education) => (
        <div key={education.id} className="flex flex-col py-3 md:py-4 lg:py-5">
          <p className="text-xs text-gray-500 pb-1">{education.dates}</p>
          <h2 className="text-md font-bold">{education.school}</h2>
          <p className="text-sm text-gray-600/80">{education.degree}</p>
          <p className="text-sm pt-2.5 text-gray-600/80">
            <HighlightedText
              text={education.description}
              highlights={education.highlights}
            />
          </p>
        </div>
      ))}
    </div>
  );
}
