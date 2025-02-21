import React from "react";

interface TitleProps {
  title: string;
  description: string;
  date?: string;
  type?: string;
}

export default function Title({ title, description, date, type }: TitleProps) {
  return (
    <div>
      {date && <p className="text-sm text-[#71717A]">{date}</p>}
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-lg font-bold">{title}</h1>
        {type && <p className="text-sm text-[#71717A]">{type}</p>}
      </div>
      <p className="text-sm text-[#71717A]">{description}</p>
    </div>
  );
}
