import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import BlobVideo from '../components/BlobVideo';
import SkillsGrid from '../components/SkillsGrid';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';

const TICKER = ['JAVA', 'SPRING BOOT', 'PHP', 'REACT', 'NODE.JS', 'DOCKER', 'POSTGRESQL', 'IONIC', 'IA / LLM'];

const PREVIEW = [
  { title: 'Pro+CV', tag: 'Plateforme SaaS', desc: "Générateur de CV avec scoring IA et paiement intégré.", initials: 'P+', accent: 'pine' },
  { title: 'Oloto', tag: 'Réservation en ligne', desc: "Location de véhicules avec back-office propriétaire.", initials: 'OL', accent: 'gold' },
  { title: 'Ce portfolio', tag: 'Vitrine personnelle', desc: "Conçu et développé de A à Z avec React.", initials: 'LA', accent: 'ink' },
];

const STATS = [
  { n: '3+', l: 'expériences en production' },
  { n: '6', l: 'domaines de compétence' },
  { n: '24h', l: 'délai de réponse moyen' },
  { n: '100%', l: 'projets documentés' },
];

export default function Home() {
  return (
    <>
      <div className="hero-decor">
        <Hero />
        <BlobVideo />
      </div>

      <div className="marquee-wrap">
        <div className="marquee">
          <span>{TICKER.map((t) => <b key={t}>{t}</b>).reduce((a, b) => [a, ' · ', b])} ·</span>
          <span>{TICKER.map((t) => <b key={t + '2'}>{t}</b>).reduce((a, b) => [a, ' · ', b])} ·</span>
        </div>
      </div>

      <section className="section stats">
        <div className="wrap stats__grid">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.06} className="stats__item">
              <b>{s.n}</b>
              <span>{s.l}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <SkillsGrid />

      <section className="section home-preview">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow"><span className="num">—</span> Réalisations</div>
            <h2>Quelques projets récents.</h2>
            <p>Un aperçu — la page Projets détaille chaque réalisation avec sa stack complète.</p>
          </Reveal>
          <div className="home-preview__grid">
            {PREVIEW.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <motion.div
                  className="home-preview__card"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={`home-preview__mark home-preview__mark--${p.accent}`}>{p.initials}</div>
                  <span className="home-preview__tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <Reveal className="home-preview__cta">
            <Link to="/projets" className="btn btn-outline">Voir tous les projets →</Link>
          </Reveal>
        </div>
      </section>

      <section className="section home-cta">
        <div className="wrap home-cta__inner">
          <Reveal>
            <h2>Un projet en tête ?</h2>
            <p>Parlons-en — par email, WhatsApp, ou via le formulaire de contact.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="btn btn-gold">Réserver un appel →</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
