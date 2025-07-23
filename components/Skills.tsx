import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Skill } from '../types';

const initialSkills: Skill[] = [
  { name: 'Java', level: 5 }, { name: 'Python', level: 4 },
  { name: 'Flutter & Dart', level: 4 }, { name: 'SQL', level: 5 },
  { name: 'Firebase', level: 4 }, { name: 'Supabase', level: 3 },
  { name: 'AWS', level: 3 }, { name: 'Azure', level: 3 },
  { name: 'Sécurité Informatique', level: 5 }, { name: 'Réseaux Mobiles', level: 4 },
  { name: 'Docker', level: 3 }, { name: 'CI/CD', level: 3 }, { name: 'Git', level: 5 }
];

const SkillBar: React.FC<{ level: number }> = ({ level }) => (
    <div className="w-full bg-slate-700 rounded-full h-1.5 mt-1">
        <motion.div
            className="bg-blue-500 h-1.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level * 20}%`}}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
        />
    </div>
);

const AddSkillModal: React.FC<{ onClose: () => void; onAddSkill: (skill: Skill) => void; }> = ({ onClose, onAddSkill }) => {
    const [name, setName] = useState('');
    const [level, setLevel] = useState(3);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onAddSkill({ name: name.trim(), level });
            onClose();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-slate-800 rounded-lg p-8 shadow-2xl w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-xl font-bold text-white mb-4">Ajouter une Compétence</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nom de la compétence (ex: Kubernetes)"
                        className="w-full p-2 rounded bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="my-4">
                        <label className="block text-sm font-medium text-slate-300 mb-2">Niveau: {level}/5</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            value={level}
                            onChange={(e) => setLevel(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold rounded-md text-slate-200 hover:bg-slate-700 transition-colors">Annuler</button>
                        <button type="submit" className="px-4 py-2 text-sm font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors">Ajouter</button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

const Skills: React.FC<{ isModalOpen: boolean; setModalOpen: (isOpen: boolean) => void;}> = ({ isModalOpen, setModalOpen }) => {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);

  const addSkill = (skill: Skill) => {
    setSkills(prev => [...prev, skill]);
  };

  return (
    <section id="skills" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36" aria-label="Skills">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Compétences</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <motion.div 
            key={skill.name} 
            className="bg-slate-800/50 p-4 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-bold text-slate-200">{skill.name}</h4>
            <SkillBar level={skill.level} />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {isModalOpen && <AddSkillModal onClose={() => setModalOpen(false)} onAddSkill={addSkill} />}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
