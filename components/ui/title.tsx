import React from "react";

interface TitleProps {
  title: string;
  description: string;
  date?: string;
}

export default function Title({ title, description, date }: TitleProps) {
  return (
    <div>
      {date && <p className="text-sm text-gray-600/80">{date}</p>}
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-sm text-gray-600/80">{description}</p>
    </div>
  );
}
