import { useState } from 'react';

export default function ProjectCard({
    title,
    description,
    details = [],
    contributions = [],
    techStack = [],
    images = [],
    imageUrl,
    projectUrl,
}) {
    const slides = images.length > 0
        ? images
        : imageUrl
            ? [{ src: imageUrl, alt: title }]
            : [];
    const [activeSlide, setActiveSlide] = useState(0);
    const hasSlideshow = slides.length > 1;
    const activeImage = slides[activeSlide];

    const showPreviousSlide = () => {
        setActiveSlide((currentSlide) => (currentSlide - 1 + slides.length) % slides.length);
    };

    const showNextSlide = () => {
        setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    };

    return (
        <article className="project-card">
            {activeImage && (
                <div className="project-slideshow" aria-label={`${title} images`}>
                    {hasSlideshow ? (
                        <button
                            type="button"
                            className="project-slideshow-image-button"
                            onClick={showNextSlide}
                            aria-label={`Show next image for ${title}`}
                        >
                            <img className="project-slideshow-image" src={activeImage.src} alt={activeImage.alt || title} />
                        </button>
                    ) : (
                        <img className="project-slideshow-image" src={activeImage.src} alt={activeImage.alt || title} />
                    )}

                    {hasSlideshow && (
                        <>
                            <button
                                type="button"
                                className="project-slide-control project-slide-control-prev"
                                onClick={showPreviousSlide}
                                aria-label={`Show previous image for ${title}`}
                            >
                                {"<"}
                            </button>
                            <button
                                type="button"
                                className="project-slide-control project-slide-control-next"
                                onClick={showNextSlide}
                                aria-label={`Show next image for ${title}`}
                            >
                                {">"}
                            </button>
                            <div className="project-slide-dots" aria-label={`${title} slideshow navigation`}>
                                {slides.map((slide, index) => (
                                    <button
                                        type="button"
                                        key={slide.src}
                                        className={`project-slide-dot ${index === activeSlide ? 'is-active' : ''}`}
                                        onClick={() => setActiveSlide(index)}
                                        aria-label={`Show image ${index + 1} for ${title}`}
                                        aria-current={index === activeSlide ? 'true' : undefined}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
            <h2>{title}</h2>
            <p>{description}</p>

            {details.length > 0 && (
                <ul className="project-detail-list">
                    {details.map((detail) => (
                        <li key={detail}>{detail}</li>
                    ))}
                </ul>
            )}

            {contributions.length > 0 && (
                <div className="project-contributions">
                    <h3>My Contributions</h3>
                    <ul className="project-detail-list">
                        {contributions.map((contribution) => (
                            <li key={contribution}>{contribution}</li>
                        ))}
                    </ul>
                </div>
            )}

            {techStack.length > 0 && (
                <ul className="project-tech-list" aria-label={`${title} technologies`}>
                    {techStack.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>
            )}

            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </article>
    );
}
