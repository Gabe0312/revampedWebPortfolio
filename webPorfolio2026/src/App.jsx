
import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import './App.css';
export default function App(){
    useEffect(() => {
        const favicon = document.getElementById('favicon');

        if (!favicon) {
            return undefined;
        }

        let timeoutId;

        const stopLoadingFavicon = () => {
            timeoutId = window.setTimeout(() => {
                favicon.href = `${import.meta.env.BASE_URL}favicon.svg?v=2`;
            }, 300);
        };

        if (document.readyState === 'complete') {
            stopLoadingFavicon();
        } else {
            window.addEventListener('load', stopLoadingFavicon, { once: true });
        }

        return () => {
            window.removeEventListener('load', stopLoadingFavicon);
            window.clearTimeout(timeoutId);
        };
    }, []);

    return(
        <div className="App">
            <Navbar />
            <main>
                <AboutMe />
                <SkillsSection />
                <CertificationsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <footer>
                <p>&copy; 2026 Gabriel Rodriguez. All rights reserved.</p>
            </footer>
        </div>
        
    );
}
