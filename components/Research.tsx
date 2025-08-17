
import React from 'react';
import Section from './Section';
import { RESEARCH_PROJECTS } from '../constants';
import type { ResearchProject } from '../types';
import { LinkIcon } from './Icons';

const ResearchCard: React.FC<ResearchProject> = ({ title, description, tags, link }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full">
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-4 font-semibold">
        Learn More <LinkIcon />
      </a>
    )}
  </div>
);


const Research: React.FC = () => {
  return (
    <Section id="research" title="Research" className="bg-white">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESEARCH_PROJECTS.map((project, index) => (
          <ResearchCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Research;
