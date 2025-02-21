import {
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandFigma,
  TbBrandFirebase,
  TbBrandFlutter,
} from "react-icons/tb";
import { SiShadcnui } from "react-icons/si";
import { JSX } from "react";

export const getTechIcon = (tech: string) => {
  const normalizedTech = tech.toLowerCase();

  const iconMap: { [key: string]: JSX.Element } = {
    "react native": <TbBrandReactNative className="text-2xl" />,
    "next.js": <TbBrandNextjs className="text-2xl" />,
    "tailwind css": <TbBrandTailwind className="text-2xl" />,
    figma: <TbBrandFigma className="text-2xl" />,
    firebase: <TbBrandFirebase className="text-2xl" />,
    flutter: <TbBrandFlutter className="text-2xl" />,
    "shadcn/ui": <SiShadcnui className="text-2xl" />,
  };

  return iconMap[normalizedTech] || null;
};
