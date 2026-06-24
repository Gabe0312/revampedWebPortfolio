
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
export default function App(){
    return(
        <div className="App">
            <Navbar />
            <main>
                <AboutMe />
                <ProjectsSection />
                
            </main>
        </div>
    );
}
