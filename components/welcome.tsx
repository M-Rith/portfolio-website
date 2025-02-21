import Image from "next/image";
import Header from "./ui/header";
import PersonalData from "@/data/personal.json";
import AboutMe from "@/public/about-me.svg";
export default function WelcomeComponent() {
  const { title, description, highlights } = PersonalData;

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

      <section id="about-me">
        <h2>About Me</h2>
        <p>
          I am a software engineer with a passion for building scalable and
          efficient systems. I'm currently working as a software engineer at
          Google and previously at Facebook.
        </p>
      </section>

      <section id="findMe">
        <h2>Fine Me On</h2>
        <p>
          I am a software engineer with a passion for building scalable and
          efficient systems. I'm currently working as a software engineer at
          Google and previously at Facebook.
        </p>
      </section>

      <section id="skills">
        <h2>My Skills</h2>
        <p>
          I am a software engineer with a passion for building scalable and
          efficient systems. I'm currently working as a software engineer at
          Google and previously at Facebook.
        </p>
      </section>
    </section>
  );
}
