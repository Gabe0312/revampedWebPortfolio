import androidCertificate from '../assets/android cert.jpg';
import iosCertificate from '../assets/ioscert.jpg';
import roboticsCertificate from '../assets/roboticscert.jpg';

const certifications = [
    {
        name: 'Fundamentals of Robotics',
        issuer: 'Florida International University',
        image: roboticsCertificate,
    },
    {
        name: 'Intermediate iOS Development',
        issuer: 'CodePath',
        image: iosCertificate,
    },
    {
        name: 'Intro to Android Development',
        issuer: 'CodePath',
        image: androidCertificate,
    },
];

export default function CertificationsSection() {
    return (
        <section id="certifications">
            <h1>Certifications</h1>

            <div className="certifications-list">
                {certifications.map((certification) => (
                    <article className="certification-card" key={certification.name}>
                        <img
                            src={certification.image}
                            alt={`${certification.name} certificate`}
                            className="certification-image"
                        />
                        <h2>{certification.name}</h2>
                        <p>{certification.issuer}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
