import Image from "next/image";
import Header from "./ui/header";
import PersonalData from "@/data/personal.json";
import AboutMe from "@/public/about-me.svg";
import Title from "./ui/title";
import TechnologyCard from "./ui/technologyCard";
import Link from "next/link";
export default function WelcomeComponent() {
  const {
    title,
    description,
    highlights,
    longDescription,
    skills,
    socials,
    aboutMe,
  } = PersonalData;

  return (
    <section id="welcome" className="welcome-section">
      <Image
        src={AboutMe}
        alt="Welcome"
        width={250}
        height={250}
        className="pb-2.5"
      />
      <Header title={title} description={description} highlights={highlights} />

      <section id="long-description" className="py-2.5">
        <p className="text-sm text-[#71717A]">{longDescription}</p>
      </section>

      <section id="about-me" className="py-2.5">
        <Title
          title="👋 About Me"
          description="✨ A brief introduction to who I am."
        />
        <p className="text-sm text-[#71717A] pt-2.5">{aboutMe}</p>
      </section>

      <section id="findMe" className="py-2.5">
        <Title
          title="📬 Connect With Me"
          description="🤝 Stay in touch and let's build something amazing together!"
        />
        <div className="flex flex-row flex-wrap gap-2 pt-2.5">
          {socials.map((social) => (
            <Link
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TechnologyCard technology={social.name} />
            </Link>
          ))}
        </div>
      </section>

      <section id="skills" className="py-2.5">
        <Title
          title="💻 My Skills"
          description="🚀 The Tech Stack That Powers My Work"
        />
        <div className="flex flex-row flex-wrap gap-2 pt-2.5">
          {skills.map((skill) => (
            <TechnologyCard key={skill} technology={skill} />
          ))}
        </div>
      </section>
    </section>
  );
}
