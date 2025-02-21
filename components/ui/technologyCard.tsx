import React from "react";
import { Card } from "./card";
import { getTechIcon } from "@/utils/techStackIcons";

interface TechnologyCardProps {
  technology: string;
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  const icon = getTechIcon(technology);

  return (
    <Card
      key={technology}
      className="justify-center flex flex-row items-center px-3 py-1 gap-2"
    >
      {icon}
      <p className="text-xs font-bold">{technology}</p>
    </Card>
  );
}
