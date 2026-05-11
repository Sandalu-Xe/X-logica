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
    icon: React.createElement(Search, { size: 28, strokeWidth: 1.5 }),
    title: 'Discovery',
    description: 'We dive deep into your business goals, user needs, and market landscape to define the perfect strategy.',
    color: 'bg-[#edf2f7] text-[#1a365d]',
  },
  {
    icon: React.createElement(PenTool, { size: 28, strokeWidth: 1.5 }),
    title: 'Design',
    description: 'Our designers craft intuitive, high-fidelity interfaces that prioritize user experience and brand identity.',
    color: 'bg-[#f5f3ff] text-[#7c3aed]',
  },
  {
    icon: React.createElement(Code, { size: 28, strokeWidth: 1.5 }),
    title: 'Development',
    description: 'Using agile methodologies, our engineers build robust, scalable code that brings your vision to life.',
    color: 'bg-[#f0f4f1] text-[#2d4a3e]',
  },
  {
    icon: React.createElement(Rocket, { size: 28, strokeWidth: 1.5 }),
    title: 'Launch',
    description: 'We ensure a smooth deployment and provide ongoing support to help your product grow and evolve.',
    color: 'bg-[#fff7ed] text-[#ea580c]',
  },
];
