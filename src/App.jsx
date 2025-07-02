import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import VerticalsTeamPage from "./pages/VerticalsTeamPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { LenisProvider } from "./contexts/LenContext";


gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <ThemeProvider>
      <LenisProvider>
        <Router>
          <div className="main-content bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <Header />
            <main className="min-h-screen ">
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/team" element={<VerticalsTeamPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LenisProvider>
    </ThemeProvider>
  );
}


export default App;
