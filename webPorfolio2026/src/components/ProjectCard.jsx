export default function ProjectCard({ title, description, imageUrl, projectUrl }) {
    return (
        <div className="project-card">
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    );
}