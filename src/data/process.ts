import { Search, PenTool, Code, Rocket } from 'lucide-react';
import React from 'react';

export interface ProcessStep {
  icon: React.ReactElement;
  title: string;
  description: string;
  color: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: React.createElement(Search, { className: 'w-8 h-8' }),
    title: 'Discovery',
    description: 'We dive deep into your business goals, user needs, and market landscape to define the perfect strategy.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: React.createElement(PenTool, { className: 'w-8 h-8' }),
    title: 'Design',
    description: 'Our designers craft intuitive, high-fidelity interfaces that prioritize user experience and brand identity.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: React.createElement(Code, { className: 'w-8 h-8' }),
    title: 'Development',
    description: 'Using agile methodologies, our engineers build robust, scalable code that brings your vision to life.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: React.createElement(Rocket, { className: 'w-8 h-8' }),
    title: 'Launch',
    description: 'We ensure a smooth deployment and provide ongoing support to help your product grow and evolve.',
    color: 'bg-orange-50 text-orange-600',
  },
];
