import About from '../components/About';
import DocumentsCarousel from '../components/Documents';

export default function AboutPage() {
  return (
    <div className="page-offset">
      <About />
      <DocumentsCarousel />
    </div>
  );
}
