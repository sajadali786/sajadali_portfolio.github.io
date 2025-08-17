
export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  link?: string;
  pdf?: string;
}

export interface ResearchProject {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  university: string;
  universityLink: string;
  profileImage: string;
  cvLink: string;
  bio: string;
  about: string;
  contact: {
    email: string;
    address: string;
  };
  socials: {
    linkedin: string;
    googleScholar: string;
    github: string;
    twitter: string;
  };
}
