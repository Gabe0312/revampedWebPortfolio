import githubIcon from '../assets/githubIcon.png';
import linkedinIcon from '../assets/linkedin icon.png';

export default function AboutMe() {
    return (
        <section id="about">
            <h1>Hey, I'm Gabriel</h1>
            <h2>Software & Embedded Systems Engineer</h2>
            <p>
                I enjoy creating reliable communications between users and devices, 
                and I have a passion for developing innovative solutions that enhance user experiences. My expertise lies in both software development and embedded systems, allowing me to bridge the gap between hardware and software seamlessly.
            </p>
            <div className="social-links-container">
                <a
                    href="https://github.com/Gabe0312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github"
                    aria-label="Visit Gabriel's GitHub profile"
                    title="GitHub"
                >
                    <img src={githubIcon} alt="" className="social-link-icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/gabriel-rod/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-linkedin"
                    aria-label="Visit Gabriel's LinkedIn profile"
                    title="LinkedIn"
                >
                    <img src={linkedinIcon} alt="" className="social-link-icon" />
                </a>
            </div>
        </section>
    );
}
