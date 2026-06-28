import educationIcon from '../assets/education icon.png';
import githubIcon from '../assets/githubIcon.png';
import headshot from '../assets/headshot-portfolio.jpg';
import linkedinIcon from '../assets/linkedin icon.png';
import resumeFile from '../assets/Gabriel Rodriguez Resume.pdf';

export default function AboutMe() {
    return (
        <section id="about">
            <div className="about-content">
                <h1>Hey, I'm Gabriel</h1>
                <h2>Software & Embedded Systems Engineer</h2>
                <p>
                    I enjoy creating reliable communications between users and devices,
                    and I have a passion for developing innovative solutions that enhance user experiences. My expertise lies in both software development and embedded systems, allowing me to bridge the gap between hardware and software seamlessly.
                </p>
                <article className="education-card">
                    <img src={educationIcon} alt="" className="education-icon" />

                    <div className="education-details">
                        <div className="education-header">
                            <h3>Bachelor of Science in Computer Science</h3>
                            <p className="education-date">Graduated: April 2026</p>
                        </div>

                        <p className="education-school">Florida International University; Miami, FL</p>
                        <p className="education-gpa">GPA: 3.7 / 4.0</p>
                    </div>
                </article>
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
                    <a
                        href="#contact"
                        className="btn-contact"
                        aria-label="Go to contact form"
                    >
                        Contact Me
                    </a>
                    <a
                        href={resumeFile}
                        download="Gabriel Rodriguez Resume.pdf"
                        className="btn-resume"
                        aria-label="Download Gabriel Rodriguez resume"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            <div className="about-headshot-frame">
                <img
                    src={headshot}
                    alt="Gabriel Rodriguez"
                    className="about-headshot"
                />
            </div>
        </section>
    );
}
