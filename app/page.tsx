import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AgentsSection from '@/components/AgentsSection';
import EyewearSection from '@/components/EyewearSection';
import JoinSection from '@/components/JoinSection';
import PartnersSection from '@/components/Partnerssection';
import RoomSection from '@/components/RoomSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AgentsSection />
      <EyewearSection />
      <JoinSection />
      <PartnersSection />
      <RoomSection />
      <Footer />
    </main>
  );
}