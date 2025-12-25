import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <p className="projects-description">
                    Here are some of the key projects I've worked on. These showcase my skills in Python Generative AI,
                    machine learning, Django development, and REST API integration. Feel free to explore them to see how
                    I approach problem-solving and create innovative solutions.
                </p>

                <div className="project-cards">
                    <div className="project-card">
                        <img src="/static/images/Automation.jpg" alt="Automation Project" className="project-image" />
                        <div className="project-details">
                            <h3 className="project-title">Duplicate File Deletion with Auto Scheduled Email Log Reporting</h3>
                            <p className="project-description">
                                This project focuses on automation, customization, transparency, and efficiency. It provides a robust
                                solution for automated duplicate file deletion and management, ensuring streamlined operations and
                                detailed reporting.
                            </p>
                            <a href="https://github.com/Satyamkashid/DeleteDuplicateFiles" target="_blank" rel="noopener noreferrer" className="project-link">
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src="/static/images/titanic.jpg" alt="Titanic Project" className="project-image" />
                        <div className="project-details">
                            <h3 className="project-title">Titanic Dataset Analysis</h3>
                            <p className="project-description">
                                A supervised machine learning project where I implemented logistic regression on the Titanic dataset
                                to predict passenger survival. It showcases my skills in data cleaning, analysis, and model training.
                            </p>
                            <a href="https://github.com/Satyamkashid/TitanicCaseStudy" target="_blank" rel="noopener noreferrer" className="project-link">
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="project-card">
                        <img src="/static/images/Automation.jpg" alt="REST API Project" className="project-image" />
                        <div className="project-details">
                            <h3 className="project-title">REST API for AI Applications</h3>
                            <p className="project-description">
                                Developed and deployed REST APIs that integrate Generative AI models with web applications. This
                                project highlights my ability to build scalable and efficient backend services.
                            </p>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
