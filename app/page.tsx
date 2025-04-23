import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProjectsSection from '@/components/sections/projects-section';
import MarqueeSection from '@/components/sections/marquee-section';
import SkillsSection from '@/components/sections/skills-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/footer';
import TimelineSection from '@/components/sections/timeline-section';
export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}