import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Stats from '../components/Stats';
import Services from '../components/Services';
import FeaturedService from '../components/FeaturedService';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedService />
      <Projects />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
