import React from "react";
import { Card } from "./card";
import { getTechIcon } from "@/utils/techStackIcons";

interface TechnologyCardProps {
  technology: string;
  hover?: boolean;
}

export default function TechnologyCard({
  technology,
  hover,
}: TechnologyCardProps) {
  const icon = getTechIcon(technology);

  return (
    <Card
      key={technology}
      className={`justify-center flex flex-row items-center px-3 py-1 gap-2 ${
        hover ? "hover:bg-black hover:text-white" : ""
      }`}
    >
      {icon}
      <p className="text-xs font-bold">{technology}</p>
    </Card>
  );
}
