import Header from "./ui/header";

export default function WelcomeComponent() {
  return (
    <section id="welcome" className="welcome-section">
      <Header
        title="Welcome"
        description="I'm a software engineer with a passion for building scalable and efficient systems. I'm currently working as a software engineer at Google and previously at Facebook."
      />
    </section>
  );
}
