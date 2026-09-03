import Services from '../components/Services';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div className="page-offset">
      <Services />
      <section className="section home-cta">
        <div className="wrap home-cta__inner">
          <Reveal>
            <h2>Un besoin spécifique ?</h2>
            <p>Décrivez-le-moi, je vous propose une approche adaptée à votre budget.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="btn btn-gold">Demander un devis →</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
