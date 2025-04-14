import Image from "next/image";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <AboutSection/>
      <ExperienceTimeline/>
    </div>
  );
}
