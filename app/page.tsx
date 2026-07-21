
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Advantages from '@/components/home/Advantages';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsapp';

export default function Home() {
  return (
    <main className='relative min-h-screen'>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Advantages />
      <Testimonials />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
