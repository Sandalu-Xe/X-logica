import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const cases = [
  {
    title: 'Cylon Spice: E-Commerce Platform',
    description: 'A premium web platform showcasing high-quality spices with a seamless user experience and modern UI.',
    tags: ['Web App', 'E-Commerce', 'UI/UX'],
    image: 'https://tktueigbfdpshjztxtvl.supabase.co/storage/v1/object/sign/Sandalu%20Album/CylonSpice.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MTQwNmI4NC03NTAyLTQ4YmItYTlkNy1jOTlhNzQxYjFiOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTYW5kYWx1IEFsYnVtL0N5bG9uU3BpY2UuanBlZyIsImlhdCI6MTc3NzYzMTI0MywiZXhwIjoyMDkyOTkxMjQzfQ.txks7F3LSD3PY--PibsAF-UZbVpUGOZZqpZBxfpGrSA',
    link: 'https://daham-ceylon-spice.vercel.app/#/',
  },
  {
    title: 'Cementi Solution Product Selling ',
    description: 'Building an intelligent analytics platform for real-time data visualization serving 50K+ daily active users.',
    tags: ['AI', 'React', 'Python'],
    image: 'https://tktueigbfdpshjztxtvl.supabase.co/storage/v1/object/sign/Sandalu%20Album/projectsimg/Spero.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MTQwNmI4NC03NTAyLTQ4YmItYTlkNy1jOTlhNzQxYjFiOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTYW5kYWx1IEFsYnVtL3Byb2plY3RzaW1nL1NwZXJvLmpwZWciLCJpYXQiOjE3Nzc2MzE3MTUsImV4cCI6MjA5Mjk5MTcxNX0.Utn3RE6nSHbINFj-D2et3mDX91HNMSt1_Evs9Tej9ds',
    link: 'https://spero-project-nine.vercel.app/#/',
  },
  {
    title: 'Lumina AI: Product Design',
    description: 'Crafting a delightful user experience for a next-gen AI-driven product that increased user retention by 85%.',
    tags: ['UX/UI', 'Figma', 'Product'],
    image: 'https://tktueigbfdpshjztxtvl.supabase.co/storage/v1/object/sign/Sandalu%20Album/projectsimg/Silveray.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MTQwNmI4NC03NTAyLTQ4YmItYTlkNy1jOTlhNzQxYjFiOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTYW5kYWx1IEFsYnVtL3Byb2plY3RzaW1nL1NpbHZlcmF5LmpwZWciLCJpYXQiOjE3Nzc2MzIyNjksImV4cCI6MjA5Mjk5MjI2OX0.F-HPxn0bTfCAKj9kEj-dTSWpYavdrhvz2Qnyj7-nk20',
    link: 'https://silverray.lk/',
  },
  {
    title: 'CoreFin: Fintech Platform',
    description: 'End-to-end development of a regulatory-compliant financial platform processing $2B+ in annual transactions.',
    tags: ['Fintech', 'Security', 'Node.js'],
    image: 'https://picsum.photos/seed/case4/800/600',
  },
  {
    title: 'Helix Health: Telemedicine App',
    description: 'Designing and building a HIPAA-compliant telemedicine platform connecting patients with providers globally.',
    tags: ['Healthcare', 'Mobile', 'HIPAA'],
    image: 'https://picsum.photos/seed/case5/800/600',
  },
  {
    title: 'Orion Retail: E-Commerce Suite',
    description: 'Custom e-commerce platform with AI-powered recommendations that boosted conversion rates by 40%.',
    tags: ['E-Commerce', 'AI', 'React'],
    image: 'https://picsum.photos/seed/case6/800/600',
  },
];

function CaseStudyCard({ project }: { project: typeof cases[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={project.link || '#'}
      target={project.link ? "_blank" : "_self"}
      rel={project.link ? "noopener noreferrer" : ""}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        display: "block",
      } as any}
      className="group cursor-pointer perspective-1000"
    >
      <div
        className="relative rounded-[32px] overflow-hidden mb-8 aspect-[4/3] shadow-xl shadow-black/5 border border-gray-100"
        style={{ transform: "translateZ(20px)" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
          <span className="text-white font-bold flex items-center gap-2">
            View Case Study <ArrowRight size={18} />
          </span>
        </div>
      </div>

      <div className="flex gap-2 mb-4" style={{ transform: "translateZ(30px)" }}>
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-accent-blue bg-accent-blue/5 px-3 py-1 rounded-full border border-accent-blue/10">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-premium-black mb-4 group-hover:text-accent-blue transition-colors" style={{ transform: "translateZ(40px)" }}>
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed" style={{ transform: "translateZ(50px)" }}>
        {project.description}
      </p>
    </motion.a>
  );
}

export default function BlogPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[10%] w-[40%] h-[40%] bg-accent-blue/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[10%] w-[35%] h-[35%] bg-accent-violet/5 rounded-full blur-[120px]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent-blue uppercase bg-accent-blue/5 rounded-full border border-accent-blue/10"
            >
              Case Studies & Blog
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight text-premium-black mb-8 leading-[1.1]"
            >
              Featured Projects &{' '}
              <span className="text-accent-blue">Success</span> Stories
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl"
            >
              Explore how we've helped leading companies across industries achieve their digital transformation
              goals with measurable impact and lasting results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 md:py-32 bg-premium-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {cases.map((project, index) => (
              <CaseStudyCard key={index} project={project} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
