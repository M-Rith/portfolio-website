import Image from "next/image";
import Header from "./ui/header";
import PersonalData from "@/data/personal.json";
import AboutMe from "@/public/about-me.svg";
import Title from "./ui/title";
import TechnologyCard from "./ui/technologyCard";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="welcome"
      className="welcome-section"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={AboutMe}
          alt="Welcome"
          width={250}
          height={250}
          className="pb-2.5"
        />
        <Header
          title={title}
          description={description}
          highlights={highlights}
        />
      </motion.div>

      {[
        {
          id: "long-description",
          content: <p className="text-sm text-[#71717A]">{longDescription}</p>,
        },
        {
          id: "about-me",
          content: (
            <>
              <Title
                title="👋 About Me"
                description="✨ A brief introduction to who I am."
              />
              <p className="text-sm text-[#71717A] pt-2.5">{aboutMe}</p>
            </>
          ),
        },
        {
          id: "faq",
          content: (
            <p className="text-[#71717A] text-sm">
              🔍 Have questions? Check out my{" "}
              <Link href="/faq" className="text-black font-bold">
                FAQ
              </Link>{" "}
              to learn more!
            </p>
          ),
        },
        {
          id: "findMe",
          content: (
            <>
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
                    <TechnologyCard technology={social.name} hover={true} />
                  </Link>
                ))}
              </div>
            </>
          ),
        },
        {
          id: "skills",
          content: (
            <>
              <Title
                title="💻 My Skills"
                description="🚀 The Tech Stack That Powers My Work"
              />
              <div className="flex flex-row flex-wrap gap-2 pt-2.5">
                {skills.map((skill) => (
                  <TechnologyCard key={skill} technology={skill} />
                ))}
              </div>
            </>
          ),
        },
      ].map((section, index) => (
        <motion.section
          key={section.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          id={section.id}
          className="py-2.5"
        >
          {section.content}
        </motion.section>
      ))}
    </motion.section>
  );
}
