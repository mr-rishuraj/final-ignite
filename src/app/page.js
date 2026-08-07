import IntroWrapper from '@/components/Intro/IntroWrapper';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Sponsors from '@/components/Sponsors/Sponsors';
import Features from '@/components/Features';
import Ignite2026 from '@/components/Ignite2026/Ignite2026';
import SpeakersGrid from '@/components/SpeakersGrid';
import EventsCollage from '@/components/EventsCollage/EventsCollage';
import EventProgramme from '@/components/EventProgramme/EventProgramme';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <IntroWrapper />
      <Navbar />
      <Hero />
      <Features />
      <EventsCollage />
      <Ignite2026 />
      <EventProgramme />
      <Sponsors />
      <SpeakersGrid />
      <Footer />
    </>
  );
}
