import { Link } from 'react-router-dom';
import { Headphones, Smartphone, Code2, Lightbulb, ShieldCheck, Globe, Database, Server, Users } from 'lucide-react';
import Reveal from './Reveal';

const SKILLS = [
  { icon: Code2, title: 'Développement web', desc: 'Sites, plateformes et applications sur mesure.', color: 'blue', pattern: 'grid', link: '/services' },
  { icon: Smartphone, title: 'Développement mobile', desc: 'Applications Android/iOS avec Ionic & React Native.', color: 'indigo', pattern: 'dots', link: '/services' },
  { icon: Headphones, title: 'Support informatique', desc: 'Dépannage, maintenance et assistance technique.', color: 'teal', pattern: 'waves', link: '/services' },
  { icon: Users, title: 'Gestion de projets', desc: 'Cadrage, planification et suivi jusqu\'à la livraison.', color: 'amber', pattern: 'grid', link: '/services' },
  { icon: Database, title: 'Administration BDD', desc: 'PostgreSQL, MySQL — modélisation et optimisation.', color: 'indigo', pattern: 'waves', link: '/services' },
  { icon: Server, title: 'Administration système', desc: 'Serveurs Linux, déploiement, supervision.', color: 'blue', pattern: 'dots', link: '/services' },
  { icon: Lightbulb, title: 'Conseil digital', desc: 'Cadrage de projet et choix technologiques.', color: 'amber', pattern: 'dots', link: '/services' },
  { icon: ShieldCheck, title: 'Audit & sécurité', desc: 'Revue de code et bonnes pratiques.', color: 'teal', pattern: 'grid', link: '/services' },
  { icon: Globe, title: 'Présence en ligne', desc: 'Sites vitrines et visibilité digitale.', color: 'blue', pattern: 'waves', link: '/services' },
];

export default function SkillsGrid() {
  return (
    <section className="section skills">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow"><span className="num">—</span> Compétences</div>
          <h2>Ce que je sais faire.</h2>
          <p>Un socle technique large, pour porter un projet de bout en bout.</p>
        </Reveal>

        <div className="skills__grid">
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <Link to={s.link} className={`skills__card skills__card--${s.color} skills__card--${s.pattern}`}>
                <div className="skills__card-pattern" />
                <s.icon size={22} className="skills__card-icon" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}