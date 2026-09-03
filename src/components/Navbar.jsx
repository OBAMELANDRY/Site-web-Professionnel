import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/projets', label: 'Projets' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <Link to="/" className="nav__brand">
          <img src={logo} alt="Logo" />
          <span></span>
        </Link>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'is-active' : ''}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn btn-outline nav__cta">Réserver un appel</Link>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span>
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
          <Link to="/contact" className="btn btn-solid" onClick={() => setOpen(false)}>Réserver un appel</Link>
        </div>
      )}
    </header>
  );
}
