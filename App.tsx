import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import PhotoSection from './components/PhotoSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

type ModalType = 'skills' | 'certs' | 'contact' | null;

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <div className="bg-slate-900/50 font-sans leading-relaxed text-slate-400 antialiased selection:bg-blue-300 selection:text-blue-900">
      <Header onContactClick={() => setActiveModal('contact')} onAddSkillClick={() => setActiveModal('skills')} />
      <div className="container mx-auto min-h-screen max-w-5xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-8">
        <main id="content" className="w-full">
          <About />
          <PhotoSection />
          <Projects />
          <Skills isModalOpen={activeModal === 'skills'} setModalOpen={() => setActiveModal(null)} />
          <Certifications />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
