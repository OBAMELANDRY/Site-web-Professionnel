import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { useQuoteModal } from './QuoteModal';

// Pour ajouter une vraie capture d'écran : mets le fichier dans src/assets/
// puis décommente et adapte la ligne suivante, une par projet.
// import proCvImg from '../assets/procv-screenshot.jpg';
// import olotoImg from '../assets/oloto-screenshot.jpg';
// import portefolio from '../assets/portefolio.p';


const PROJECTS = [
  {
    tag: 'Plateforme SaaS',
    title: 'Pro+CV',
    desc: "Générateur de CV professionnels pour candidats gabonais, africains et internationaux — création guidée, export PDF, scoring ATS par IA et paiement intégré.",
    stack: ['React', 'Node.js', 'PostgreSQL', 'IA'],
    href: 'https://landry-assoumou.web.app',        // ← remplace par 'https://ton-lien.com' quand le projet sera en ligne
    image: '',        // ← remplace par proCvImg une fois l'import ci-dessus décommenté
    accent: 'pine',
    initials: 'P+',
    hover: 'tilt',
  },
  {
    tag: 'Réservation en ligne',
    title: 'Oloto — GestionReservation',
    desc: "Plateforme de location de véhicules : recherche, disponibilité en temps réel et réservation sans compte préalable, avec back-office propriétaire.",
    stack: ['Spring Boot', 'Angular', 'PostgreSQL', 'JWT'],
    href: null,
    image: null,
    accent: 'gold',
    initials: 'OL',
    hover: 'lift',
  },
  {
    tag: 'Vitrine personnelle',
    title: 'Ce portfolio',
    desc: "Le site que vous consultez actuellement — conçu et développé de A à Z, pensé comme une carte de visite technique pour mes clients.",
    stack: ['React', 'Vite', 'Framer Motion'],
    href: '/',
    image: null,
    accent: 'ink',
    initials: 'LA',
    hover: 'glow',
  },
];

const HOVER_VARIANTS = {
  tilt: { rotate: -1.5, y: -8, scale: 1.015 },
  lift: { y: -14, scale: 1.02 },
  glow: { scale: 1.03 },
};

function Mockup({ initials, accent, image }) {
  return (
    <div className={`proj__mockup proj__mockup--${accent}`}>
      <div className="proj__mockup-bar">
        <span></span><span></span><span></span>
      </div>
      {image ? (
        <div className="proj__mockup-body proj__mockup-body--photo">
          <img src={image} alt="" />
        </div>
      ) : (
        <div className="proj__mockup-body">
          <span className="proj__mockup-mark">{initials}</span>
          <div className="proj__mockup-lines">
            <div style={{ width: '70%' }} />
            <div style={{ width: '45%' }} />
            <div style={{ width: '58%' }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const openQuote = useQuoteModal();

  return (
    <section id="projects" className="section projects">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow"><span className="num">03</span> Projets</div>
          <h2>Une sélection de ce que j'ai construit.</h2>
          <p>
            Aperçus provisoires — captures réelles et liens en ligne à venir au fil des mises en production.
          </p>
        </Reveal>

        <div className="proj__grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.div
                className={`proj__card proj__card--${p.hover}`}
                whileHover={HOVER_VARIANTS[p.hover]}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Mockup initials={p.initials} accent={p.accent} image={p.image} />
                <div className="proj__meta">
                  <span className="proj__tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="proj__stack">
                    {p.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                  <div className="proj__actions">
                    {p.href ? (
                      <a href={p.href} className="proj__link">Voir le projet →</a>
                    ) : (
                      <span className="proj__link proj__link--soon">Bientôt en ligne</span>
                    )}
                    <button className="proj__quote" onClick={() => openQuote(`Projet similaire à ${p.title}`)}>
                      Demander un devis
                    </button>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}