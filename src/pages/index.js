import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <Statistics />
      <Benefits />
      <hr />
      <Pricing />
      <Footer />
    </div>
  );
}
