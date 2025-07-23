import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
    onContactClick: () => void;
    onAddSkillClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick, onAddSkillClick }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-sm"
    >
      <div className="container mx-auto flex max-w-5xl items-center justify-between p-4">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold tracking-tight text-slate-200 sm:text-xl">
            Alloma N’da Yao Jean Luc
          </h1>
          <h2 className="text-sm font-medium tracking-tight text-slate-400 sm:text-base">
            Développeur Java Backend & Sécurité
          </h2>
        </div>
        <div className="hidden sm:flex items-center space-x-2">
            <a href="/cv.pdf" download className="px-3 py-2 text-sm font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                Télécharger CV
            </a>
            <button onClick={onAddSkillClick} className="px-3 py-2 text-sm font-semibold rounded-md bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors">
                Ajouter Compétence
            </button>
            <button onClick={onContactClick} className="px-3 py-2 text-sm font-semibold rounded-md bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors">
                Contact Rapide
            </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
