import React from 'react';
import { motion } from 'framer-motion';

const SocialLink: React.FC<{ href: string; 'aria-label': string; children: React.ReactNode }> = ({ href, 'aria-label': ariaLabel, children }) => (
    <a
      href={href}
      className="block text-slate-400 hover:text-blue-400 transition-colors"
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabel}
    >
      {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <motion.footer
        className="text-center text-slate-500 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
    >
      <div className="mb-8">
        <blockquote className="text-lg italic text-slate-400">
          "La meilleure façon de prédire l’avenir est de l’inventer."
        </blockquote>
        <cite className="text-sm not-italic">— Alan Kay</cite>
      </div>

      <ul className="flex items-center justify-center space-x-6 mb-8" aria-label="Social media">
        <li>
          <SocialLink href="https://github.com/Cerveau70/" aria-label="GitHub">
            <span className="sr-only">GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </SocialLink>
        </li>
        <li>
          <SocialLink href="https://www.linkedin.com/in/jean-luc-alloma-973a72322/" aria-label="LinkedIn">
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </SocialLink>
        </li>
        <li>
          <SocialLink href="mailto:allomajean@gmail.com" aria-label="Email">
            <span className="sr-only">Email</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path d="M3 4H21V6L12 13L3 6V4Z M3 8L12 15L21 8V20H3V8Z"></path>
            </svg>
          </SocialLink>
        </li>
        <li>
            <SocialLink href="tel:+2250595454387" aria-label="Téléphone">
                <span className="sr-only">Téléphone</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.849 1.42l.841 3.364c.238.954-.252 1.98-.992 2.55l-1.54 1.54a1.875 1.875 0 002.652 2.652l1.54-1.54c.57-.57 1.596-1.23 2.55-.992l3.364.841c.834.209 1.42.989 1.42 1.849v1.372a3 3 0 01-3 3H4.5a3 3 0 01-3-3v-15z" clipRule="evenodd" />
                </svg>
            </SocialLink>
        </li>
        <li>
            <SocialLink href="https://wa.me/2250595403964" aria-label="WhatsApp">
                <span className="sr-only">WhatsApp</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M19.3 4.7a9.88 9.88 0 00-13.9 0 9.88 9.88 0 000 13.9L2 22l3.4-3.4a9.88 9.88 0 0013.9 0 9.88 9.88 0 000-13.9zM12 18.2c-.8 0-1.6-.2-2.3-.5l-3 1 1-2.9c-.4-.8-.6-1.6-.6-2.5 0-3.9 3.2-7.1 7.1-7.1s7.1 3.2 7.1 7.1-3.2 7.1-7.1 7.1z"/>
                    <path d="M14.7 12.3c-.3-.1-1.6-.8-1.8-1s-.4-.1-.5.1c-.2.2-.6.7-.8.9s-.3.2-.5.1c-.2-.1-1.1-.4-2-1.2s-1.4-1.8-1.6-2.1c-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.2.3-.4s.1-.3 0-.4c-.1-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.5-.4h-.3c-.2 0-.4.1-.6.3s-.7.7-.7 1.7.7 2 1.2 2.5 1.5 1.5 3.5 2.5c.3.1.5.2.8.3.3.1.6 0 .8-.1.3-.1.9-.4 1-1 .2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z"/>
                </svg>
            </SocialLink>
        </li>
      </ul>
    </motion.footer>
  );
};

export default Footer;