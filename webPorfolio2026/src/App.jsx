
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import './App.css';
export default function App(){
    return(
        <div className="App">
            <Navbar />
            <main>
                <AboutMe />
                <ProjectsSection />
            </main>
            <footer>
                <p>&copy; 2026 Gabriel Rodriguez. All rights reserved.</p>
            </footer>
        </div>
        
    );
}
