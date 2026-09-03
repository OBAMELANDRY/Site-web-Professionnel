import { createContext, useContext, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Sparkles, CheckCircle2, Loader2 } from 'lucide-react';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY
} from '../emailConfig';

const QuoteCtx = createContext(() => {});

export function useQuoteModal() {
  return useContext(QuoteCtx);
}

export function QuoteModalProvider({ children }) {
  const [service, setService] = useState(null);

  const open = (serviceName) => setService(serviceName);
  const close = () => setService(null);

  return (
    <QuoteCtx.Provider value={open}>
      {children}

      <AnimatePresence>
        {service && (
          <QuoteModal
            service={service}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </QuoteCtx.Provider>
  );
}

function QuoteModal({ service, onClose }) {
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY
        }
      )
      .then((response) => {
        console.log('EmailJS SUCCESS:', response);
        setStatus('sent');
      })
      .catch((error) => {
        console.error('EmailJS ERROR:', error);
        setStatus('error');
      });
  };

  return (
    <motion.div
      className="qm-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="qm-panel"
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.97
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.97
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }}
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="qm-close"
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>

        <span className="qm-blob" />

        <AnimatePresence mode="wait">

          {status === 'sent' ? (

            <motion.div
              key="success"
              className="qm-success"
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0
              }}
            >

              <motion.div
                initial={{
                  scale: 0,
                  rotate: -30
                }}
                animate={{
                  scale: 1,
                  rotate: 0
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 16,
                  delay: 0.1
                }}
              >
                <CheckCircle2
                  size={52}
                  color="#2F5FE0"
                />
              </motion.div>

              <h3>Demande envoyée !</h3>

              <p>
                Je reviens vers vous sous 24h par email ou WhatsApp.
              </p>

              <button
                className="qm-submit"
                onClick={onClose}
              >
                Fermer
              </button>

            </motion.div>

          ) : (

            <motion.div
              key="form"
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
            >

              <div className="qm-head">

                <span className="qm-kicker">
                  <Sparkles size={12} />
                  Demande de devis
                </span>

                <h3>{service}</h3>

                <p>
                  Remplissez le formulaire, je reviens vers vous sous 24h.
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                ref={formRef}
                className="qm-form"
              >

                {/* Sujet */}
                <input
                  type="hidden"
                  name="title"
                  value={`Devis — ${service}`}
                  readOnly
                />

                {/* Service */}
                <input
                  type="hidden"
                  name="service"
                  value={service}
                  readOnly
                />

                {/* Nom + Email */}
                <div className="qm-row">

                  <div className="field">

                    <label>Nom</label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Votre nom"
                    />

                  </div>

                  <div className="field">

                    <label>Email</label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="vous@exemple.com"
                    />

                  </div>

                </div>

                {/* Budget */}
                <div className="field">

                  <label>Budget indicatif</label>

                  <select
                    name="budget"
                    defaultValue="À définir"
                  >

                    <option>
                      Moins de 500 000 FCFA
                    </option>

                    <option>
                      500 000 — 2 000 000 FCFA
                    </option>

                    <option>
                      Plus de 2 000 000 FCFA
                    </option>

                    <option>
                      À définir
                    </option>

                  </select>

                </div>

                {/* Message */}
                <div className="field">

                  <label>Décrivez votre besoin</label>

                  <textarea
                    name="message"
                    rows="3"
                    required
                    placeholder="Quelques lignes sur votre projet..."
                  />

                </div>

                {/* Actions */}
                <div className="qm-actions">

                  <button
                    type="submit"
                    className="qm-submit"
                    disabled={status === 'sending'}
                  >

                    {status === 'sending' ? (
                      <Loader2
                        size={16}
                        className="qm-spin"
                      />
                    ) : (
                      'Envoyer la demande'
                    )}

                  </button>

                  <a
                    href={`https://wa.me/24176260624?text=${encodeURIComponent(
                      `Bonjour Landry, je souhaite un devis pour : ${service}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="qm-whatsapp"
                  >
                    Ou sur WhatsApp
                  </a>

                  {status === 'error' && (
                    <p className="qm-error">
                      Envoi impossible — réessayez ou passez par WhatsApp.
                    </p>
                  )}

                </div>

              </form>

            </motion.div>
          )}

        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
}