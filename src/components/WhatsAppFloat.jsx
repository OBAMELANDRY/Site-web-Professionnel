import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MSG = encodeURIComponent("Bonjour Landry, je souhaite discuter d'un projet.");

export default function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="wa-float">
      <AnimatePresence>
        {showBubble && !dismissed && (
          <motion.div
            className="wa-bubble"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <button className="wa-bubble__close" onClick={() => setDismissed(true)} aria-label="Fermer">×</button>
            <p>Une question sur un projet ? Écrivez-moi directement 👋</p>
            <a href={`https://wa.me/24176260624?text=${MSG}`} target="_blank" rel="noreferrer" className="wa-bubble__cta">
              🇬🇦 Gabon — +241 76 26 06 24
            </a>
            <a href={`https://wa.me/21651046714?text=${MSG}`} target="_blank" rel="noreferrer" className="wa-bubble__cta">
              🇹🇳 Tunisie — +216 51 04 67 14
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="wa-fab"
        aria-label="Contacter sur WhatsApp"
        onClick={() => { setDismissed(false); setShowBubble(true); }}
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor">
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.31.652 4.47 1.78 6.31L4 29l7.86-1.75A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3Zm0 21.8c-1.98 0-3.83-.55-5.41-1.5l-.39-.23-4.66 1.04 1.06-4.53-.25-.4A9.77 9.77 0 0 1 5.2 15c0-5.96 4.85-10.8 10.8-10.8 5.96 0 10.8 4.85 10.8 10.8 0 5.96-4.85 10.8-10.8 10.8Zm5.94-8.1c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.55-.73-.56h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.21-.61-.37Z"/>
        </svg>
      </button>
    </div>
  );
}
