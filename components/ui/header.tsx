import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <div>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-sm text-gray-600/80">{description}</p>
    </div>
  );
}
