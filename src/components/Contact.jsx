import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle2, Loader2 } from 'lucide-react';
import Reveal from './Reveal';
import LocationMap from './LocationMap';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY
} from '../emailConfig';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: EMAILJS_PUBLIC_KEY
        }
      )
      .then(() => {
        setStatus('sent');
        form.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="section contact svc-ambiance-soft">
      <div className="wrap">

        <Reveal
          className="section-head"
          style={{
            margin: '0 auto 56px',
            textAlign: 'center'
          }}
        >
          <div
            className="eyebrow"
            style={{ justifyContent: 'center' }}
          >
            <span className="num">05</span> Contact
          </div>

          <h2>Parlons de votre projet.</h2>

          <p style={{ margin: '14px auto 0' }}>
            Décrivez votre besoin — je réponds sous 24h, par email ou WhatsApp.
          </p>
        </Reveal>

        <Reveal className="contact__card">

          {status === 'sent' ? (

            <div className="contact__success">
              <CheckCircle2 size={48} color="#2F5FE0" />

              <h3>Votre message a bien été envoyé !</h3>

              <p>
                Je reviens vers vous sous 24h par email ou WhatsApp.
              </p>

              <button
                className="btn contact__submit"
                onClick={() => setStatus('idle')}
              >
                Envoyer un autre message
              </button>
            </div>

          ) : (

            <form onSubmit={handleSubmit}>

              {/* Sujet transmis à EmailJS */}
              <input
                type="hidden"
                name="title"
                value="Nouvelle demande — Portfolio"
                readOnly
              />

              {/* NOM + EMAIL */}
              <div className="contact__row">

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

              {/* SERVICE + BUDGET */}
              <div className="contact__row">

                <div className="field">
                  <label>Service souhaité</label>

                  <select
                    name="service"
                    defaultValue="Application web sur mesure"
                  >
                    <option>
                      Application web sur mesure
                    </option>

                    <option>
                      API & microservices
                    </option>

                    <option>
                      Intégration IA
                    </option>

                    <option>
                      Audit & performance
                    </option>

                    <option>
                      Paiement & Mobile Money
                    </option>

                    <option>
                      Maintenance & conseil
                    </option>

                    <option>
                      Autre
                    </option>
                  </select>
                </div>

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

              </div>

              {/* MESSAGE */}
              <div className="field">

                <label>Message</label>

                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Décrivez votre projet en quelques lignes..."
                />

              </div>

              {/* BOUTONS */}
              <div className="contact__actions">

                <button
                  type="submit"
                  className="btn contact__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <Loader2
                      size={16}
                      className="qm-spin"
                    />
                  ) : (
                    'Envoyer la demande →'
                  )}
                </button>

                <a
                  href="https://wa.me/24176260624?text=Bonjour%20Landry%2C%20je%20souhaite%20discuter%20d%27un%20projet."
                  target="_blank"
                  rel="noreferrer"
                  className="btn contact__whatsapp"
                >
                  Discuter sur WhatsApp
                </a>

              </div>

              {/* MESSAGE D'ERREUR */}
              {status === 'error' && (
                <p
                  className="qm-error"
                  style={{ marginTop: 14 }}
                >
                  Envoi impossible — réessayez ou passez par WhatsApp.
                </p>
              )}

            </form>
          )}

        </Reveal>

        {/* CARTE */}
        <LocationMap />

        {/* AUTRES MOYENS DE CONTACT */}
        <Reveal className="contact__alt">

          <a href="mailto:assoumoulandry1@gmail.com">
            assoumoulandry1@gmail.com
          </a>

          <a
            href="https://wa.me/24176260624"
            target="_blank"
            rel="noreferrer"
          >
            +241 076 26 06 24
          </a>

          <a
            href="https://obamelandry.github.io"
            target="_blank"
            rel="noreferrer"
          >
            obamelandry.github.io
          </a>

        </Reveal>

      </div>
    </section>
  );
}