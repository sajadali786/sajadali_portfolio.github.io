
import type { Publication, ResearchProject, PersonalInfo } from './types';

/**
 * ===================================================================================
 *                                  INSTRUCTIONS
 * ===================================================================================
 *
 * Welcome to your new portfolio!
 *
 * To personalize this website, you only need to edit this file.
 *
 * Replace the placeholder data below with your own information.
 *
 * 1.  PERSONAL_INFO: Update your name, title, bio, contact details, etc.
 * 2.  RESEARCH_PROJECTS: List your research projects.
 * 3.  PUBLICATIONS: Add your academic publications.
 *
 * Tips:
 * - For images, you can use a public URL from a service like Imgur, or place
 *   an image in the `public` folder and use the path `/image-name.jpg`.
 * - If you don't have a link for something, you can remove the `link` property or
 *   set it to an empty string.
 *
 * ===================================================================================
 */

export const PERSONAL_INFO: PersonalInfo = {
  name: "Jane Doe",
  title: "PhD Candidate in Computational Biology",
  university: "University of Innovatech",
  universityLink: "https://www.example.com",
  profileImage: "https://picsum.photos/seed/profile/400/400",
  cvLink: "/jane_doe_cv.pdf", // Place your CV in the `public` folder
  bio: "I am a passionate researcher exploring the intersections of machine learning and genomics to uncover novel therapeutic targets.",
  about: "Currently a PhD candidate at the University of Innovatech's Department of Computer Science, I am advised by Dr. Alan Turing. My research focuses on developing deep learning models to predict protein-protein interactions and their implications in complex diseases. Before my PhD, I received my B.S. in Bioinformatics from the Institute of Technology, where I graduated summa cum laude. I am always open to collaborations and discussions on exciting new ideas in computational biology and beyond.",
  contact: {
    email: "jane.doe@example.com",
    address: "123 Innovation Drive, Tech City, USA 12345"
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/janedoe-example",
    googleScholar: "https://scholar.google.com/citations?user=example",
    github: "https://github.com/janedoe-example",
    twitter: "https://twitter.com/janedoe-example"
  }
};

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    title: "DeepInteract: A Graph Neural Network for PPI Prediction",
    description: "Developed a novel GNN architecture that outperforms state-of-the-art models in predicting protein-protein interactions by leveraging structural and sequence data.",
    tags: ["Deep Learning", "Graph Neural Networks", "Bioinformatics", "PyTorch"],
    link: "https://github.com/janedoe-example/deepinteract"
  },
  {
    title: "Genomic Variant Effect Prediction using Transformers",
    description: "Utilized a Transformer-based model to predict the pathogenicity of genomic variants, aiding in the diagnosis of rare genetic disorders.",
    tags: ["Genomics", "Transformers", "NLP", "TensorFlow"],
  },
  {
    title: "Single-Cell RNA-seq Data Imputation",
    description: "Investigated generative adversarial networks (GANs) for imputing missing values in single-cell RNA sequencing data, improving downstream analysis.",
    tags: ["scRNA-seq", "GANs", "Computational Biology"],
    link: "https://github.com/janedoe-example/sc-impute"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "DeepInteract: Predicting Protein-Protein Interactions with Graph Neural Networks",
    authors: ["Jane Doe", "John Smith", "Alan Turing"],
    venue: "Journal of Molecular Biology",
    year: 2023,
    link: "https://doi.org/10.1234/jmb.2023.01.001",
    pdf: "/papers/paper1.pdf" // Place your PDFs in the `public` folder
  },
  {
    title: "A Transformer Model for Predicting Pathogenicity of Genomic Variants",
    authors: ["Jane Doe", "Emily White", "Alan Turing"],
    venue: "Nature Genetics",
    year: 2022,
    link: "https://doi.org/10.1234/ng.2022.02.002",
    pdf: "/papers/paper2.pdf"
  },
  {
    title: "Imputing single-cell RNA-seq data using Generative Adversarial Networks",
    authors: ["Jane Doe", "Michael Green"],
    venue: "Proceedings of the RECOMB Conference",
    year: 2021,
    link: "https://doi.org/10.1234/recomb.2021.03.003",
  }
];
