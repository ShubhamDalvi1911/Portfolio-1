import React from 'react';
import './Certifications.css';

const Certifications = () => {
    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <p className="certifications-description">
                    Here are some of the professional certifications I have earned that demonstrate my skills and expertise.
                </p>
                <div className="certifications-grid">
                    <div className="certification-card">
                        <h3 className="certification-title">Programming Fundamentals using Python - Part 1</h3>
                        <p className="certification-issuer">Issued by: Infosys Springboard</p>
                        <a href="https://github.com/Satyamkashid/Certifications/blob/main/pythoncirtificate1.pdf" target="_blank" rel="noopener noreferrer" className="certification-link">
                            View Certificate
                        </a>
                    </div>
                    <div className="certification-card">
                        <h3 className="certification-title">Programming Fundamentals using Python - Part 2</h3>
                        <p className="certification-issuer">Issued by: Infosys Springboard</p>
                        <a href="https://github.com/Satyamkashid/Certifications/blob/main/pythoncirtificate2.pdf" target="_blank" rel="noopener noreferrer" className="certification-link">
                            View Certificate
                        </a>
                    </div>
                    <div className="certification-card">
                        <h3 className="certification-title">Generative AI with Python</h3>
                        <p className="certification-issuer">Issued by: OpenAI Academy</p>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="certification-link">
                            View Certificate
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
