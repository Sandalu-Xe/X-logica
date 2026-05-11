export interface JobPosition {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  image?: string;
}

export const openPositions: JobPosition[] = [
  {
    id: '1',
    slug: 'senior-full-stack-engineer',
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    description: "We are looking for a Senior Full Stack Engineer to join our core team. You'll be responsible for building and scaling high-performance web applications, working with modern technologies like React, Node.js, and TypeScript.",
    responsibilities: [
      'Design and implement scalable backend services and APIs',
      'Build responsive and interactive frontend components',
      'Collaborate with designers and product managers to define features',
      'Mentor junior engineers and promote best practices',
      'Optimize applications for maximum speed and scalability'
    ],
    requirements: [
      '5+ years of experience in full-stack development',
      'Proficiency in TypeScript, React, and Node.js',
      'Experience with PostgreSQL or other relational databases',
      'Strong understanding of cloud infrastructure (AWS/GCP/Azure)',
      'Excellent problem-solving and communication skills'
    ],
    image: '/images/senior-fullstack.png'
  },
  {
    id: '2',
    slug: 'product-designer',
    title: 'Product Designer (UX/UI)',
    department: 'Design',
    location: 'Remote / New York',
    type: 'Full-time',
    description: "Join us as a Product Designer to create beautiful, intuitive, and high-impact user experiences. You'll lead the design process from concept to delivery, ensuring our products are both functional and visually stunning.",
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Develop and maintain our design system',
      'Work closely with engineers to ensure design fidelity',
      'Iterate on designs based on feedback and analytics'
    ],
    requirements: [
      '3+ years of experience in product design',
      'Strong portfolio demonstrating UX and UI expertise',
      'Proficiency in Figma and other design tools',
      'Experience building and scaling design systems',
      'Ability to think strategically about product goals'
    ],
    image: '/images/product-designer.png'
  },
  {
    id: '3',
    slug: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    department: 'AI & Data',
    location: 'Remote',
    type: 'Full-time',
    description: "We're seeking a Machine Learning Engineer to build and deploy state-of-the-art AI solutions. You'll work on everything from data pipeline architecture to fine-tuning large language models.",
    responsibilities: [
      'Develop and deploy machine learning models',
      'Design and implement data pipelines',
      'Research and evaluate new AI techniques and tools',
      'Optimize model performance for production environments',
      'Collaborate with cross-functional teams to integrate AI features'
    ],
    requirements: [
      'Experience with Python and ML frameworks (PyTorch/TensorFlow)',
      'Understanding of LLMs and generative AI',
      'Strong background in mathematics and statistics',
      'Experience with big data technologies',
      'PhD or Masters in CS or related field is a plus'
    ],
    image: '/images/ml-engineer.png'
  },
  {
    id: '4',
    slug: 'devops-cloud-architect',
    title: 'DevOps / Cloud Architect',
    department: 'Infrastructure',
    location: 'Remote / London',
    type: 'Full-time',
    description: "As a DevOps / Cloud Architect, you'll be the backbone of our infrastructure. You'll design and manage scalable, secure, and resilient cloud environments for our suite of products.",
    responsibilities: [
      'Design and manage cloud infrastructure on AWS/GCP',
      'Implement CI/CD pipelines and automation',
      'Ensure system security, reliability, and performance',
      'Manage container orchestration using Kubernetes',
      'Collaborate with engineering teams on architectural decisions'
    ],
    requirements: [
      'Expertise in cloud platforms (AWS, GCP, or Azure)',
      'Strong experience with Infrastructure as Code (Terraform)',
      'Proficiency in containerization and orchestration',
      'Knowledge of security best practices and compliance',
      'Experience with monitoring and logging tools'
    ],
    image: '/images/devops-architect.png'
  },
  {
    id: '5',
    slug: 'technical-project-manager',
    title: 'Technical Project Manager',
    department: 'Operations',
    location: 'San Francisco',
    type: 'Full-time',
    description: "We're looking for a Technical Project Manager to bridge the gap between business goals and engineering execution. You'll manage project timelines, resources, and communication to ensure successful delivery.",
    responsibilities: [
      'Define project scope, goals, and deliverables',
      'Manage project timelines and resource allocation',
      'Coordinate between cross-functional teams',
      'Identify and mitigate project risks',
      'Communicate project status to stakeholders'
    ],
    requirements: [
      '3+ years of experience in technical project management',
      'Strong understanding of software development lifecycles',
      'Excellent organizational and leadership skills',
      'Ability to communicate complex technical concepts to non-technical stakeholders',
      'Experience with Agile/Scrum methodologies'
    ],
    image: '/images/project-manager.png'
  }
];

export const perks = [
  { emoji: '🌍', title: 'Remote-First', desc: 'Work from anywhere in the world' },
  { emoji: '📈', title: 'Growth Budget', desc: '$3,000/year for learning & conferences' },
  { emoji: '🏖️', title: 'Unlimited PTO', desc: 'Take the time you need to recharge' },
  { emoji: '💰', title: 'Competitive Pay', desc: 'Top-of-market salary + equity' },
  { emoji: '🏥', title: 'Full Benefits', desc: 'Health, dental, vision & 401(k)' },
  { emoji: '🎯', title: 'Impactful Work', desc: 'Build products used by millions' },
];
