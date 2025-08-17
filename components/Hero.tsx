
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GithubIcon, LinkedinIcon, GoogleScholarIcon, TwitterIcon, DownloadIcon } from './Icons';

const Hero: React.FC = () => {
  const { name, title, university, universityLink, profileImage, bio, cvLink, socials } = PERSONAL_INFO;

  return (
    <section id="home" className="bg-white">
      <div className="container mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 text-center">
            <img 
              src={profileImage} 
              alt={name} 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover shadow-lg border-4 border-white" 
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              {name}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-600">
              {title}
            </p>
            <p className="mt-2 text-lg text-gray-500">
              <a href={universityLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                {university}
              </a>
            </p>
            <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg text-gray-700">
              {bio}
            </p>
            <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
              <a 
                href={cvLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105"
              >
                <DownloadIcon />
                Download CV
              </a>
              <div className="flex items-center gap-4">
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><LinkedinIcon /></a>
                <a href={socials.googleScholar} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><GoogleScholarIcon /></a>
                <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><GithubIcon /></a>
                <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600"><TwitterIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
