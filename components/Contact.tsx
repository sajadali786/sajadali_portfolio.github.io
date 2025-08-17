
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { GithubIcon, LinkedinIcon, GoogleScholarIcon, TwitterIcon } from './Icons';

const Contact: React.FC = () => {
  const { contact, socials } = PERSONAL_INFO;
  return (
    <Section id="contact" title="Get In Touch" className="bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-8">
          I'm always open to discussing new research, projects, and collaboration opportunities. Feel free to reach out!
        </p>
        <p className="text-lg text-gray-800 font-semibold">
          <a href={`mailto:${contact.email}`} className="hover:text-blue-600 transition-colors">{contact.email}</a>
        </p>
        <p className="mt-2 text-gray-600">{contact.address}</p>
        <div className="mt-8 flex justify-center items-center gap-6">
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><LinkedinIcon /></a>
          <a href={socials.googleScholar} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><GoogleScholarIcon /></a>
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><GithubIcon /></a>
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><TwitterIcon /></a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
