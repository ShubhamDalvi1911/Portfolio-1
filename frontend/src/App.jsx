import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="main-content">
                <Home />
                <About />
                <Resume />
                <Skills />
                <Projects />
                <Certifications />
                <Contact />
            </div>
        </div>
    );
}

export default App;
