import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import Reveal from './Reveal';

const DOCS = [
  { title: 'Curriculum Vitae', tag: 'CV', href: '/docs/CV-Landry-Assoumou.pdf' },
  { title: "Diplôme d'Ingénieur", tag: 'Diplôme', href: '/docs/Diplome-Ingenieur.pdf' },
  { title: 'Diplôme de Licence', tag: 'Diplôme', href: '/docs/Diplome-Licence.pdf' },
  { title: 'DALF C1 — Français', tag: 'Langue', href: '/docs/DALF-C1.pdf' },
  { title: 'IELTS B1 — Anglais', tag: 'Langue', href: '/docs/IELTS-B1.pdf' },
  { title: 'SQL Intermediate', tag: 'Certification', href: '/docs/Certificat-SQL-Intermediate.pdf' },
  { title: 'Understanding AI', tag: 'Certification', href: '/docs/Certificat-Understanding-AI.pdf' },
  { title: 'Python — Huawei Talent', tag: 'Certification', href: '/docs/Huawei-Python.pdf' },
  { title: 'Salesforce — Platform Administrator', tag: 'Certification', href: '/docs/Salesforce-Platform-Administrator.pdf' },
  { title: 'Attestation — Progress Technologies', tag: 'Attestation', href: '/docs/Attestation-Progress-Technologies.pdf' },
  { title: 'Attestation de stage — AFTL', tag: 'Attestation', href: '/docs/Attestation-Stage-AFTL.pdf' },
];

function useVisibleCount() {
  const [n, setN] = useState(3);
  useEffect(() => {
    const update = () => setN(window.innerWidth < 640 ? 1 : window.innerWidth < 940 ? 2 : 3);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return n;
}

export default function DocumentsCarousel() {
  const VISIBLE = useVisibleCount();
  const [start, setStart] = useState(0);
  const max = Math.max(0, DOCS.length - VISIBLE);

  useEffect(() => { setStart((s) => Math.min(s, max)); }, [max]);

  const next = () => setStart((s) => Math.min(s + 1, max));
  const prev = () => setStart((s) => Math.max(s - 1, 0));

  return (
    <section id="documents" className="section documents">
      <div className="wrap">
        <Reveal className="section-head docs__head">
          <div>
            <div className="eyebrow"><span className="num">—</span> Documents</div>
            <h2>Envie du détail complet ?</h2>
            <p>Consultez ou téléchargez mes diplômes, certifications et attestations.</p>
          </div>
          <div className="docs__nav">
            <button onClick={prev} disabled={start === 0} aria-label="Précédent"><ChevronLeft size={20} /></button>
            <button onClick={next} disabled={start === max} aria-label="Suivant"><ChevronRight size={20} /></button>
          </div>
        </Reveal>

        <div className="docs__viewport">
          <motion.div
            className="docs__track"
            animate={{ x: `calc(-${start} * (100% / ${VISIBLE} + 18px))` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {DOCS.map((d) => (
              <div className="docs__card" key={d.title} style={{ flex: `0 0 calc(100% / ${VISIBLE} - 12px)` }}>
                <div className="docs__icon"><FileText size={22} /></div>
                <span className="docs__tag">{d.tag}</span>
                <h3>{d.title}</h3>
                <div className="docs__actions">
                  <a href={d.href} target="_blank" rel="noreferrer" className="docs__view" aria-label={`Consulter ${d.title}`}>
                    <Eye size={16} /> Consulter
                  </a>
                  <a href={d.href} download className="docs__dl" aria-label={`Télécharger ${d.title}`}>
                    <Download size={16} />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="docs__dots">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button key={i} className={i === start ? 'is-active' : ''} onClick={() => setStart(i)} aria-label={`Page ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
