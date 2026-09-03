import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import photoConference from '../assets/photo-conference.jpg';
import photoHeadshot from '../assets/photo-headshot.jpg';
import photoCasual from '../assets/photo-casual.jpg';

const PHOTOS = [photoConference, photoHeadshot, photoCasual];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % PHOTOS.length), 3600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="wrap hero__inner">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          
          <h1 className="hero__title">
            Ingénieur SI & logiciel.<br />
            Je transforme des <em>idées</em><br />
            en produits numériques.
          </h1>
          <p className="hero__sub">
            Landry Obame — je <strong>conçois</strong> et <strong>développe</strong> des <strong>applications web</strong>
            <strong>& mobile sur mesure,</strong> du <strong>cahier des charges</strong> à la mise en <strong>production.</strong>
            
          </p>
          <div className="hero__cta">
            <a href="https://landry-assoumou.web.app/contact" className="btn btn-gold">Discutons de votre projet</a>
            <a href="https://landry-assoumou.web.app/projets" className="btn btn-outline">Voir mes réalisations</a>
          </div>
          <div className="hero__meta">
            <div><b>3+</b><span>expériences en production</span></div>
          </div>
        </motion.div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.96, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="hero__photo-window">
            <AnimatePresence mode="wait">
              <motion.img
                key={i}
                src={PHOTOS[i]}
                alt="Landry Assoumou"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <div className="hero__photo-dots">
              {PHOTOS.map((_, idx) => (
                <button
                  key={idx}
                  className={idx === i ? 'is-active' : ''}
                  onClick={() => setI(idx)}
                  aria-label={`Photo ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="hero__badge">
            <svg viewBox="0 0 100 100" className="hero__badge-ring">
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span>Ingénieur<br/>Logiciel</span>
          </div>
        </motion.div>
      </div>

    
    </section>
  );
}
