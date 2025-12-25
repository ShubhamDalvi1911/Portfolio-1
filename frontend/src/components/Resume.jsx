import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="container">
                <h2 className="text-center mb-5">Resume</h2>

                {/* Education Section */}
                <div className="resume-block">
                    <h3>Education</h3>
                    <ul>
                        <li><strong>Master Of Computer Application</strong> - PES Modern College Of Engineering Pune (2024 - 2026)</li>
                        <li><strong>B.Sc. Computer Science</strong> - Dr. D Y Patil Arts Commerce and Science College Pimpri (2021 - 2024) - 8.82 CGPA</li>
                        <li><strong>Higher Secondary Certificate</strong> - Residential Junior College (2020 - 2021) - 92.5%</li>
                        <li><strong>Secondary School Certificate</strong> - Shri Shivaji High School (2018 - 2019) - 88.4%</li>
                    </ul>
                </div>

                {/* Skills Section */}
                <div className="resume-block">
                    <h3>Skills</h3>
                    <ul>
                        <li>Programming Languages: Python, Data Science, Machine Learning, Generative AI</li>
                        <li>Data Structures: Arrays, Linked Lists, Stacks, Queues</li>
                        <li>Algorithms: Sorting, Searching</li>
                        <li>Database & Backend: MySQL, Django, REST APIs</li>
                        <li>Version Control: Git, GitHub, GitLab</li>
                        <li>Soft Skills: Collaboration, Communication, Planning, Teamwork</li>
                    </ul>
                </div>

                {/* Work Experience Section */}
                <div className="resume-block">
                    <h3>Work Experience</h3>
                    <ul>
                        <li><strong>Python and Gen AI Intern</strong> - e-Zest an Accion Labs Company (Sept 2024 – Dec 2024)</li>
                    </ul>
                </div>

                {/* Projects Section */}
                <div className="resume-block">
                    <h3>Projects</h3>
                    <ul>
                        <li><strong>Duplicate File Deletion with Auto Scheduled Email Log Reporting</strong> - Tech Stack: Python, Os, Hashlib, Scheduler, Email</li>
                        <li><strong>Titanic Survival Predictor</strong> - Tech Stack: Python, Pandas, Matplotlib, Scikit-Learn, Logistic Regression</li>
                        <li><strong>Auto Scheduled Process Logger</strong> - Tech Stack: Python, psutil Library, Scheduler, Email</li>
                    </ul>
                </div>

                {/* Highlights Section */}
                <div className="resume-block">
                    <h3>Highlights</h3>
                    <ul>
                        <li>Proficient in developing Python applications using both procedural and object-oriented programming</li>
                        <li>Proficient in creating Python scripts for web automation, file automation, and process automation</li>
                        <li>Expertise in Machine Learning and Generative AI, including predictive models and AI-driven solutions</li>
                    </ul>
                </div>

                <div className="resume-block">
                    <a href="https://github.com/Satyamkashid/Certifications/blob/main/SatyamLatestResume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        View My Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
