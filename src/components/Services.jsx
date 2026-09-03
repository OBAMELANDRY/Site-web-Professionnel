import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowDownRight, ChevronRight, MessageCircle, SearchX } from 'lucide-react';
import Reveal from './Reveal';
import { useQuoteModal } from './QuoteModal';

const SERVICES = [
  { title: 'Applications web sur mesure', desc: 'Sites vitrines, plateformes métier et SaaS.', keywords: 'web site vitrine plateforme saas frontend backend react node' },
  { title: 'Développement mobile', desc: 'Applications Android/iOS avec Ionic & React Native.', keywords: 'mobile android ios app application ionic react native' },
  { title: 'API & microservices', desc: 'Architectures backend robustes et intégrations.', keywords: 'api backend microservice architecture integration' },
  { title: 'Intégration IA', desc: 'Chatbots, scoring automatisé, génération de contenu.', keywords: 'ia ai intelligence artificielle chatbot automatisation' },
  { title: 'Support informatique', desc: 'Dépannage, maintenance et assistance technique.', keywords: 'support informatique depannage assistance technique it help desk' },
  { title: 'Administration système & BDD', desc: 'Serveurs Linux, bases de données, supervision.', keywords: 'admin systeme serveur linux base de donnees database sql postgresql sysadmin dba' },
  { title: 'Gestion de projets', desc: "Cadrage, planification et suivi jusqu'à la livraison.", keywords: 'gestion projet management planification suivi chef de projet' },
  { title: 'Audit & performance', desc: 'Revue de code et diagnostic de performance.', keywords: 'audit performance revue de code securite optimisation' },
  { title: 'Paiement & Mobile Money', desc: 'Flux de paiement sécurisés, adaptés au contexte local.', keywords: 'paiement mobile money airtel argent transaction' },
  { title: 'Maintenance & conseil', desc: 'Support technique continu et accompagnement.', keywords: 'maintenance conseil accompagnement strategie' },
];

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default function Services() {
  const openQuote = useQuoteModal();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return SERVICES;
    return SERVICES.filter((s) => normalize(`${s.title} ${s.desc} ${s.keywords}`).includes(q));
  }, [query]);

  const waLink = (text) =>
    `https://wa.me/24176260624?text=${encodeURIComponent(text)}`;

  return (
    <section id="services" className="svc-ambiance">
      <div className="wrap">
        <Reveal className="svc__head">
          <div className="eyebrow"><span className="num">04</span> Services</div>
          <h2>Mes Services</h2>
        </Reveal>

        <Reveal className="svc__ask" delay={0.05}>
          <ArrowDownRight size={22} className="svc__ask-arrow" />
          <div className="svc__ask-bar">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Landry, quels sont tes services ?"
            />
            <div className="svc__ask-btn"><Search size={18} /></div>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          {results.length > 0 ? (
            <motion.div
              key="list"
              className="svc__list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {results.map((s, i) => (
                <motion.button
                  key={s.title}
                  className="svc__row"
                  onClick={() => openQuote(s.title)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                >
                  <span className="svc__row-dot" />
                  <span className="svc__row-text">
                    <b>{s.title}</b>
                    <em>{s.desc}</em>
                  </span>
                  <ChevronRight size={20} className="svc__row-chev" />
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              className="svc__empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <SearchX size={26} />
              <p>Aucun service ne correspond à « {query} ».</p>
              <span>Décrivez-moi votre besoin directement, je vous réponds sous 24h.</span>
              <a href={waLink(`Bonjour Landry, j'ai un besoin lié à : ${query}`)} target="_blank" rel="noreferrer" className="svc__empty-cta">
                <MessageCircle size={17} /> Contacter sur WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <Reveal className="svc__wa-pill" delay={0.2}>
          <a href={waLink('Bonjour Landry, quels sont vos services ?')} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            <span>+241 76 26 06 24</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
