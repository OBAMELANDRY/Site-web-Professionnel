import { MapPin, Phone } from 'lucide-react';
import Reveal from './Reveal';

function WA(props) {
  return (
    <svg viewBox="0 0 32 32" width={props.size || 16} height={props.size || 16} fill="currentColor">
      <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.31.652 4.47 1.78 6.31L4 29l7.86-1.75A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3Z" opacity=".001"/>
      <path d="M16 3C9.37 3 4 8.37 4 15c0 2.31.65 4.47 1.78 6.31L4 29l7.86-1.75A11.9 11.9 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16 3Zm5.94 15.6c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.55-.73-.56h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.21-.61-.37Z"/>
    </svg>
  );
}

export default function LocationMap() {
  const query = encodeURIComponent('Akanda Château, Libreville, Gabon');

  return (
    <Reveal className="location">
      <div className="location__side">
        <div className="location__info">
          <MapPin size={18} />
          <div>
            <b>Basé à Akanda</b>
            <span>Libreville, Gabon</span>
          </div>
        </div>

        <div className="location__phones">
          <a href="https://wa.me/24176260624" target="_blank" rel="noreferrer" className="location__phone">
            <span className="location__phone-icons"><WA size={14} /><Phone size={13} /></span>
            <div>
              <b>+241 76 26 06 24</b>
              <span>Gabon — WhatsApp & appel</span>
            </div>
          </a>
          <a href="https://wa.me/21651046714" target="_blank" rel="noreferrer" className="location__phone">
            <span className="location__phone-icons location__phone-icons--single"><WA size={14} /></span>
            <div>
              <b>+216 51 04 67 14</b>
              <span>Tunisie — WhatsApp uniquement</span>
            </div>
          </a>
        </div>
      </div>

      <div className="location__map">
        <iframe
          title="Localisation — Akanda Château"
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Reveal>
  );
}
