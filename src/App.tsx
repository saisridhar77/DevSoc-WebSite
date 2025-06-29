import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollIndicator from './components/ScrollIndicator';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import VerticalsTeamPage from './pages/VerticalsTeamPage';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    setIsInitialized(true);

    return () => {
      lenis.destroy();
    };
  }, []);

  if (!isInitialized) {
    return null;
  }

  return (
    <ThemeProvider>
      <Router>
        <ScrollIndicator />
        <div className="main-content bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/team" element={<VerticalsTeamPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;