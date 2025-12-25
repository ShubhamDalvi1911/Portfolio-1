import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="home">
            <span className="Hello">HELLO!</span>
            <h1 className="Name">
                I'm <span>Satyam <br /> Kashid</span>
            </h1>
            <h2 className="Profession">
                Innovative Python Developer
                <span>Specializing in Generative AI and</span>
                <span>Machine Learning</span>
            </h2>
            <a href="https://github.com/Satyamkashid" className="btn" target="_blank" rel="noopener noreferrer">
                My Works
            </a>
        </section>
    );
};

export default Home;
