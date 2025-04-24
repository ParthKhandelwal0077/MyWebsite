import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/footer';
import TimelineSection from '@/components/sections/timeline-section';

// Dynamically import components that use browser APIs
const MarqueeSection = dynamic(() => import('@/components/sections/marquee-section'), {
  ssr: false
});

const MarqueeSectionBelow = dynamic(() => import('@/components/sections/marquee-sections-2'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <SkillsSection />
      <MarqueeSectionBelow />
      <ContactSection />
      <Footer />
    </div>
  );
}