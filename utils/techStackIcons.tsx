import {
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandFigma,
  TbBrandFirebase,
  TbBrandFlutter,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandWordpress,
  TbBrandVue,
  TbBrandApple,
  TbBrandGmail,
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandGitlab,
  TbBrandTelegram,
  TbWorld,
  TbBrandAppstore,
} from "react-icons/tb";
import {
  SiDart,
  SiMobxstatetree,
  SiShadcnui,
  SiCodewars,
} from "react-icons/si";
import { RiBearSmileFill } from "react-icons/ri";
import { BiLogoPlayStore } from "react-icons/bi";
import { JSX } from "react";

export const getTechIcon = (tech: string) => {
  const normalizedTech = tech.toLowerCase();

  const iconMap: { [key: string]: JSX.Element } = {
    "react native": <TbBrandReactNative className="text-md" />,
    "next.js": <TbBrandNextjs className="text-md" />,
    "tailwind css": <TbBrandTailwind className="text-md" />,
    figma: <TbBrandFigma className="text-md" />,
    firebase: <TbBrandFirebase className="text-md" />,
    flutter: <TbBrandFlutter className="text-md" />,
    "shadcn/ui": <SiShadcnui className="text-md" />,
    mobx: <SiMobxstatetree className="text-md" />,
    typescript: <TbBrandTypescript className="text-md" />,
    react: <TbBrandReact className="text-md" />,
    wordpress: <TbBrandWordpress className="text-md" />,
    dart: <SiDart className="text-md" />,
    vue: <TbBrandVue className="text-md" />,
    zustand: <RiBearSmileFill className="text-md" />,
    ios: <TbBrandApple className="text-md" />,
    gmail: <TbBrandGmail className="text-md" />,
    linkedin: <TbBrandLinkedin className="text-md" />,
    github: <TbBrandGithub className="text-md" />,
    gitlab: <TbBrandGitlab className="text-md" />,
    telegram: <TbBrandTelegram className="text-md" />,
    codewars: <SiCodewars className="text-md" />,
    website: <TbWorld className="text-md" />,
    appstore: <TbBrandAppstore className="text-md" />,
    playstore: <BiLogoPlayStore className="text-md" />,
  };

  return iconMap[normalizedTech] || null;
};
