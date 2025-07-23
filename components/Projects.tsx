import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Assistant Vocal IA',
    context: 'Hackathon IA',
    description: 'Un assistant vocal pour commerçants, optimisant la gestion d\'inventaire et les ventes via traitement du langage naturel.',
    tags: ['Python', 'IA', 'API REST'],
  },
  {
    title: 'Robotique Autonome',
    context: 'Compétition',
    description: 'Conception et pilotage d\'un robot autonome pour des tâches précises en compétition, alliant hardware et software.',
    tags: ['C++', 'Arduino', 'Vision'],
  },
  {
    title: 'Déploiement Flutter Multi-cloud',
    context: 'Projet Personnel',
    description: 'Architecture et déploiement d\'une app Flutter sur AWS et Azure pour une haute disponibilité et une résilience maximale.',
    tags: ['Flutter', 'AWS', 'Azure', 'CI/CD'],
  },
  {
    title: 'Système de Gestion Scolaire Castaing',
    context: 'Projet académique développé pour l’école Castaing',
    description: 'Gestion des élèves, notes, emplois du temps, et facturation.',
    tags: ['Java', 'Swing', 'MySQL', 'JasperReports'],
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="relative flex-shrink-0 w-72 h-full p-6 rounded-lg bg-slate-800/50 shadow-lg flex flex-col justify-between hover:bg-slate-800/80 transition-colors duration-300">
    <div>
      <h3 className="font-bold text-lg text-blue-400">{project.title}</h3>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">{project.context}</p>
      <p className="text-sm text-slate-300">{project.description}</p>
    </div>
    <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
      {project.tags.map((tag) => (
        <li key={tag} className="mr-1.5 mt-2">
          <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
            {tag}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Projects: React.FC = () => {
    const scrollRef = useRef(null);
  return (
    <section id="projects" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36" aria-label="Selected projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projets</h2>
      </div>
      <motion.div ref={scrollRef} className="cursor-grab" whileTap={{ cursor: "grabbing" }}>
        <motion.div 
            drag="x"
            dragConstraints={scrollRef}
            className="flex items-stretch space-x-6 pb-4 -mx-6 px-6"
            style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;