import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Stats from '../components/Stats';
import Services from '../components/Services';
import FeaturedProduct from '../components/FeaturedProduct';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedProduct />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
