import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './BrandIcons';
import logo from '../assets/logo.png';

// TODO Landry : remplace ces 3 URLs par tes vrais profils
const SOCIALS = [
  { icon: GithubIcon, href: 'https://github.com/obamelandry', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/REMPLACER-MOI', label: 'LinkedIn' },
  { icon: FacebookIcon, href: 'https://facebook.com/REMPLACER-MOI', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Logo" />
          <div>
            <div className="footer__name">Landry Assoumou</div>
            <div className="footer__role">Ingénieur SI & Logiciel — Libreville, Gabon</div>
          </div>
        </div>

        <nav className="footer__nav">
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">À propos</Link>
          <Link to="/projets">Projets</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer__socials">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon size={16} />
            </a>
          ))}
          <a href="mailto:assoumoulandry1@gmail.com" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
      <div className="wrap footer__bottom">
        <span>Conçu et développé avec soin, depuis Libreville.</span>
        <span>© 2026 Landry Assoumou</span>
      </div>
    </footer>
  );
}
