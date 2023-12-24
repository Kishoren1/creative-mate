import Hero from "@/components/landing/Hero";
import AboutSrction from "@/components/landing/AboutSection";
import RecentWork from "@/components/landing/RecentWork";
import ComingEvents from "@/components/landing/ComingEvents";
import ComingProjects from "@/components/landing/ComingProjects";
import Newsletter from "@/components/shared/Newsletter";

export default function Home() {
  return (
    <div className="container">
      <Hero />

      <AboutSrction />

      <RecentWork />

      <ComingProjects />

      <ComingEvents />

      <Newsletter />
    </div>
  );
}
