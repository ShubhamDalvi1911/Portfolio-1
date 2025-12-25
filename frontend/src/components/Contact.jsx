import React, { useState } from 'react';
import { submitContactForm } from '../services/api';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        const result = await submitContactForm(formData);

        if (result.success) {
            setStatus({
                type: 'success',
                message: 'Your message has been sent successfully. We will get back to you shortly.'
            });
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus({
                type: 'error',
                message: result.error || 'An error occurred while submitting the form. Please try again.'
            });
        }

        setIsSubmitting(false);
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <p className="contact-description">
                    I'd love to hear from you! Whether you have a question, want to collaborate on a project, or just want
                    to chat, feel free to reach out. You can also fill out the form below to send me a direct message.
                </p>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {status.message && (
                            <div className={`alert alert-${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Enter your message here"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

                <div className="contact-details">
                    <h3>Other Ways to Reach Me:</h3>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:satyamkashid11@gmail.com">satyamkashid11@gmail.com</a></li>
                        <li><strong>Phone:</strong> +91 9359071309</li>
                        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/satyamkashid" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
                        <li><strong>GitHub:</strong> <a href="https://github.com/Satyamkashid" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
