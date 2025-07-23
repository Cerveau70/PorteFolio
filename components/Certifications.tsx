import React from 'react';
import { motion } from 'framer-motion';
import { Certification } from '../types';

const certifications: Certification[] = [
  {
    name: 'Hackathon National sur l\'IA',
    issuer: 'Grande École d\'Ingénieurs',
    year: '2025',
  },
  {
    name: 'Compétition de Robotique',
    issuer: 'Club Scientifique Universitaire',
    year: '2025',
  },
];

const CertificationItem: React.FC<{ cert: Certification }> = ({ cert }) => (
  <motion.li
    className="mb-6"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <div className="group relative grid grid-cols-8 gap-4 transition-all">
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 col-span-2" aria-label={cert.year}>
        {cert.year}
      </header>
      <div className="z-10 col-span-6">
        <h3 className="font-medium leading-snug text-slate-200 group-hover:text-blue-400 transition-colors">
          {cert.name}
        </h3>
        <p className="text-sm text-slate-500">{cert.issuer}</p>
      </div>
    </div>
  </motion.li>
);


const Certifications: React.FC = () => {
  return (
    <section id="certs" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36" aria-label="Certifications and participations">
       <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Certifications & Participations</h2>
      </div>
      <ul>
        {certifications.map((cert) => (
            <CertificationItem key={cert.name} cert={cert} />
        ))}
      </ul>
       <div className="mt-8">
            <button className="group flex items-center text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors">
                <span className="mr-2 text-xl">+</span>
                Ajouter une certification
            </button>
        </div>
    </section>
  );
};

export default Certifications;
