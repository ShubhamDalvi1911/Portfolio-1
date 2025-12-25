import React, { useEffect } from 'react';

const Sidebar = () => {
    useEffect(() => {
        // Scroll spy functionality
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('nav a');

            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                // Check if section is in viewport (with offset for better UX)
                if (window.scrollY >= sectionTop - 200) {
                    currentSection = section.getAttribute('id');
                }
            });

            // Update active class on nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Call once on mount to set initial active state
        handleScroll();

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="side-panel">
            <img
                src="/static/images/profile-photo1.JPG"
                alt="Profile Photo"
                className="profile-photo"
            />
            <div className="my-name">
                <h2>SATYAM KASHID</h2>
            </div>
            <div className="social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://linkedin.com/in/satyamkashid" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <nav>
                <a href="#home" className="active"><i className="fas fa-home"></i> Home</a>
                <a href="#about"><i className="fas fa-user"></i> About</a>
                <a href="#resume"><i className="fas fa-file-alt"></i> Resume</a>
                <a href="#skills"><i className="fas fa-tools"></i> Skills</a>
                <a href="#projects"><i className="fas fa-briefcase"></i> Projects</a>
                <a href="#certifications"><i className="fas fa-certificate"></i> Certifications</a>
                <a href="#contact"><i className="fas fa-envelope"></i> Contact</a>
            </nav>
        </div>
    );
};

export default Sidebar;
