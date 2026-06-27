import { projects } from '../data/Projects';
import ProjectCard from './ProjectCard';
export default function ProjectsSection() {
    return (
        <section id="projects">
            <h1>My Projects</h1>

                <div className="project-cards-container">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            projectUrl={project.projectUrl}

                        ></ProjectCard>
                    ))}
                </div>
            
        </section>
    );
}
