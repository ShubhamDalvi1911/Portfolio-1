import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="text-center mb-5">Skills</h2>

                <div className="skills-grid">
                    <div className="skill-card">
                        <h3>Programming Languages</h3>
                        <p>Python, Data Science, Machine Learning, Generative AI</p>
                    </div>

                    <div className="skill-card">
                        <h3>Data Structures</h3>
                        <p>Arrays, Linked Lists, Stacks, Queues</p>
                    </div>

                    <div className="skill-card">
                        <h3>Algorithms</h3>
                        <p>Sorting, Searching</p>
                    </div>

                    <div className="skill-card">
                        <h3>Database & Backend</h3>
                        <p>MySQL, Django, REST APIs</p>
                    </div>

                    <div className="skill-card">
                        <h3>Version Control & IDEs</h3>
                        <p>Git, GitHub, GitLab, Visual Studio Code, Jupyter Notebook</p>
                    </div>

                    <div className="skill-card">
                        <h3>Soft Skills</h3>
                        <p>Collaboration, Communication, Planning, Teamwork, Time Management, Leadership</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
