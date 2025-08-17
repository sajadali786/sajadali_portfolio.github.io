
import React from 'react';
import Section from './Section';
import { PUBLICATIONS } from '../constants';
import type { Publication } from '../types';

const PublicationItem: React.FC<Publication> = ({ title, authors, venue, year, link, pdf }) => (
  <li className="mb-6 p-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 italic my-1">{authors.join(', ')}</p>
    <p className="text-sm text-gray-500">{venue}, {year}</p>
    <div className="mt-2">
      {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4 font-medium">DOI</a>}
      {pdf && <a href={pdf} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">PDF</a>}
    </div>
  </li>
);

const Publications: React.FC = () => {
  return (
    <Section id="publications" title="Publications" className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ul>
          {PUBLICATIONS.map((pub, index) => (
            <PublicationItem key={index} {...pub} />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Publications;
