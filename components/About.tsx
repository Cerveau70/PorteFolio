import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36"
      aria-label="About me"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="lg:sr-only sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">À Propos</h2>
      </div>
      <div>
        <p className="mb-4">
          Mon parcours a débuté avec un <strong>Baccalauréat scientifique</strong>, qui a forgé ma logique et ma rigueur. Aujourd'hui étudiant en <strong>3ème année de Licence en Génie Logiciel</strong> en Côte d’Ivoire, je transforme cette base solide en expertise technique. Ma passion est de construire des systèmes robustes et sécurisés, de l'architecture logicielle complexe à la protection des données.
        </p>
        <p className="mb-4">
          Je suis particulièrement fasciné par les défis de la <strong>cybersécurité</strong> et des <strong>réseaux mobiles</strong>. J'aime plonger au cœur des systèmes pour en comprendre les moindres rouages, identifier les vulnérabilités et concevoir des défenses efficaces. En parallèle, je cultive une expertise en <strong>développement full-stack</strong>, me permettant de créer des applications complètes, performantes et intuitives.
        </p>
      </div>
    </section>
  );
};

export default About;
