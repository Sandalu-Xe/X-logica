import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Stats from '../components/Stats';
import Services from '../components/Services';
import FeaturedService from '../components/FeaturedService';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedService />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
