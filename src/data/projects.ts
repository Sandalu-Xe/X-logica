// Single source of truth for all project data.

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Dhaham Ceylone Spice',
    description: 'A responsive full-stack platform featuring a dynamic product API, sophisticated Framer Motion animations, and custom dark/light mode for a premium export brand.',
    tags: ['React', 'TypeScript', 'Express'],
    image: 'https://tktueigbfdpshjztxtvl.supabase.co/storage/v1/object/sign/Sandalu%20Album/CylonSpice.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MTQwNmI4NC03NTAyLTQ4YmItYTlkNy1jOTlhNzQxYjFiOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTYW5kYWx1IEFsYnVtL0N5bG9uU3BpY2UuanBlZyIsImlhdCI6MTc3NzYzMTI0MywiZXhwIjoyMDkyOTkxMjQzfQ.txks7F3LSD3PY--PibsAF-UZbVpUGOZZqpZBxfpGrSA',
    link: 'https://daham-ceylon-spice.vercel.app/#/',
  },
  {
    title: 'Spero Cementi',
    description: 'A luxury-grade interface with a viewport-adaptive animation system and persistent theme engine, designed for high-fidelity user experiences.',
    tags: ['React', 'Animations', 'UI/UX'],
    image: 'https://tktueigbfdpshjztxtvl.supabase.co/storage/v1/object/sign/Sandalu%20Album/projectsimg/Spero.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MTQwNmI4NC03NTAyLTQ4YmItYTlkNy1jOTlhNzQxYjFiOTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTYW5kYWx1IEFsYnVtL3Byb2plY3RzaW1nL1NwZXJvLmpwZWciLCJpYXQiOjE3Nzc2MzE3MTUsImV4cCI6MjA5Mjk5MTcxNX0.Utn3RE6nSHbINFj-D2et3mDX91HNMSt1_Evs9Tej9ds',
    link: 'https://spero-project-nine.vercel.app/#/',
  },
  {
    title: 'Grand Silver Ray',
    description: 'A dual-platform ecosystem featuring a Next.js client website and a PHP/MySQL administrative dashboard for managing real-time room availability and guest bookings.',
    tags: ['Next.js', 'PHP', 'MySQL'],
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

// Subset shown on the home page
export const featuredProjects = projects.slice(0, 3);
