import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="left">
                        <h3>Hello, I'm Satyam</h3>
                        <p>
                            I'm a Python Generative AI Developer with hands-on experience in creating advanced AI applications.
                            I've focused on building intelligent systems using Generative AI, Django, and REST APIs. My journey
                            began with a passion for data science, machine learning, and automation, and it has since evolved
                            into crafting innovative solutions that combine AI with real-world applications.
                        </p>
                        <p>
                            In addition to my technical skills, I am always eager to learn new technologies, challenge myself,
                            and push the boundaries of what AI can achieve. My expertise includes:
                        </p>
                        <ul>
                            <li>Building and deploying Generative AI models</li>
                            <li>Creating REST APIs for AI-based applications</li>
                            <li>Data analysis and visualization with Python libraries (Pandas, Matplotlib, Seaborn)</li>
                            <li>Machine learning algorithms (Logistic Regression, Decision Trees, etc.)</li>
                            <li>Working with cloud platforms for AI deployments</li>
                        </ul>
                    </div>
                    <div className="right">
                        <h3>Professional Journey</h3>
                        <ul>
                            <li>Developed a Python Automation project for deleting duplicate files with scheduled email log reporting.</li>
                            <li>Implemented machine learning models using logistic regression on Titanic dataset for supervised learning projects.</li>
                            <li>Contributed to open-source AI projects and collaborated on developing REST APIs for AI solutions.</li>
                            <li>Worked on projects involving data cleaning, analysis, and automation using Python scripts.</li>
                            <li>Worked on different Machine Learning Algorithms like Linear Regression, Logistic Regression, Decision Trees, Random Forest, K-Nearest Neighbors and K Means Clustering.</li>
                        </ul>

                        <h3>Future Goals</h3>
                        <p>
                            In the future, I aim to deepen my expertise in AI and machine learning, especially in the areas of
                            natural language processing and deep learning. I also plan to collaborate on more real-world projects
                            that leverage AI to solve complex problems across various industries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
