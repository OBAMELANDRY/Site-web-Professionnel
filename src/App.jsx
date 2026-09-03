import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QuoteModalProvider } from './components/QuoteModal';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <QuoteModalProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/projets" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </QuoteModalProvider>
    </BrowserRouter>
  );
}
