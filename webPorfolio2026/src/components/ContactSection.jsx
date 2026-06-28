import { useState } from 'react';

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'grodr358@fiu.edu';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );

        window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact">
            <h1>Contact</h1>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field">
                    <label htmlFor="contact-name">Name</label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                    />
                </div>

                <div className="contact-field">
                    <label htmlFor="contact-email">Email</label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="contact-field">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        required
                    />
                </div>

                <button type="submit" className="contact-submit-button">
                    Send Message
                </button>
            </form>
        </section>
    );
}
