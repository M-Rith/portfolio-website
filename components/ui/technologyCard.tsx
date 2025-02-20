import React from "react";
import { Card } from "./card";

interface TechnologyCardProps {
   technology: string;
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <Card
      key={technology}
      className="justify-center flex flex-row items-center px-3 py-1"
    >
      <p className="text-xs">{technology}</p>
    </Card>
  );
}
