import { splitTextWithHighlights } from "@/utils/textHighlighter";
import React from "react";

interface HeaderProps {
  title: string;
  description: string;
  highlights?: string[];
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

export default function Header({
  title,
  description,
  highlights,
}: HeaderProps) {
  return (
    <div>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-sm text-[#71717A]">
        <HighlightedText text={description} highlights={highlights} />
      </p>
    </div>
  );
}
