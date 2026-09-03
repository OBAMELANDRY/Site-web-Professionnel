import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import portrait from '../assets/portrait.jpg';

export default function AboutVisual() {
  return (
    <div className="av">
      <motion.div
        className="av__photo"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={portrait} alt="Landry Chero Assoumou Obame" />
      </motion.div>

      <motion.div
        className="av__video"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="av__video-inner">
          <Play size={22} />
          <span>Vidéo de soutenance<br />à venir</span>
        </div>
      </motion.div>

      <span className="av__ring" />
      <span className="av__dot av__dot--1" />
      <span className="av__dot av__dot--2" />
      <p className="av__caption">Landry, à Libreville — entre deux déploiements.</p>
    </div>
  );
}
