import IntroWrapper from '@/components/Intro/IntroWrapper';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Sponsors from '@/components/Sponsors/Sponsors';
import PreviousEditions from '@/components/PreviousEditions/PreviousEditions';
import InvestorValue from '@/components/InvestorValue/InvestorValue';
import Features from '@/components/Features';
import Ignite2026 from '@/components/Ignite2026/Ignite2026';
import SpeakersGrid from '@/components/SpeakersGrid';
import Institutions from '@/components/Institutions/Institutions';
import Venue from '@/components/Venue/Venue';
import GetInvolved from '@/components/GetInvolved/GetInvolved';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <IntroWrapper />
      <Navbar />
      <Hero />
      <Sponsors />
      <PreviousEditions />
      <InvestorValue />
      <Features />
      <Ignite2026 />
      <SpeakersGrid />
      <Institutions />
      <Venue />
      <GetInvolved />
      <Footer />
    </>
  );
}
