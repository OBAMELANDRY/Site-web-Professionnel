import Reveal from './Reveal';
import AboutVisual from './AboutVisual';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap about__grid">
        <AboutVisual />

        <Reveal className="about__text" delay={0.1}>
          <div className="eyebrow"><span className="num">01</span> Profil</div>
          <h2>Je ne construis pas juste du code, je construis des systèmes qu'on peut maintenir.</h2>
          <p>
            Diplômé Ingénieur Systèmes et Logiciels, j'ai fait mes armes sur des projets réels :
            plateformes web en production, audits de code, montée en charge. Ce que je préfère,
            c'est le moment où un cahier des charges flou devient une application que des gens
            utilisent tous les jours sans y penser.
          </p>
          <p>
            Je travaille aussi bien sur des architectures Java/Spring Boot que sur des stacks
            JavaScript modernes, avec une attention particulière portée à la documentation et à
            l'expérience utilisateur — parce qu'un bon système survit à celui qui l'a écrit.
          </p>
          <div className="about__quote">
            « Le code le plus élégant est celui que quelqu'un d'autre peut reprendre sans m'appeler. »
          </div>
        </Reveal>
      </div>
    </section>
  );
}
