import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AgentsSection from '@/components/AgentsSection';
import EyewearSection from '@/components/EyewearSection';
import JoinSection from '@/components/JoinSection';
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
      <RoomSection />
      <Footer />
    </main>
  );
}