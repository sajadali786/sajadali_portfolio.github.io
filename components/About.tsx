
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <img src="https://picsum.photos/seed/about/600/400" alt="A professional setting" className="rounded-lg shadow-lg object-cover w-full h-full"/>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
