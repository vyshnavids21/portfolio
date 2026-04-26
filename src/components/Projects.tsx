import React from "react";
import "./styles/Projects.css";

const Projects: React.FC = () => {
    return (
        <div className="projects-section">
            <h2 className="projects-heading">Professional & Personal Projects</h2>
            <div className="projects-container">
                <div className="featured-project">
                    <div className="project-card featured-card">
                        <h3>SMARTShip™ – ZeroNorth</h3>
                        <p className="project-meta">
                            Professional Project · Product-based Company
                        </p>
                        <p className="project-tech">
                            Angular · Node.js · Datastax · IoT Data Platforms
                        </p>
                        <p className="project-desc">
                            Enterprise-grade, real-time analytics platform used across global
                            fleets to improve operational efficiency. A mission-critical product
                            supporting data-driven maritime decision-making.
                        </p>
                        <ul>
                            <li>Worked on Angular-based UI for fleet monitoring and analytics</li>
                            <li>
                                Contributed to backend integrations using Node.js, working with
                                Datastax to handle and retrieve large volumes of operational and
                                IoT data
                            </li>
                            <li>Integrated real-time data and configurable dashboards</li>
                            <li>
                                Focused on performance, maintainability, and clean architecture
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="projects-grid">
                    <div className="project-card">
                        <h3>Journhive – Personal Travel Journal App</h3>
                        <p className="project-meta">Personal Project</p>
                        <p className="project-tech">Angular · Node.js · MongoDB</p>
                        <p className="project-desc">
                            A personal travel journal application to store memories, photos, and
                            experiences, allowing users to document trips and export travel
                            stories as downloadable PDFs.
                        </p>
                        <ul>
                            <li>Create and manage travel entries</li>
                            <li>Upload photos and memories</li>
                            <li>Export travel stories as PDF</li>
                            <li>Share memories with loved ones</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>SLOTBASE – Meeting Room Booking System</h3>
                        <p className="project-meta">Personal Project</p>
                        <p className="project-tech">Next.js · Node.js · MongoDB</p>
                        <p className="project-desc">
                            A meeting room booking application that allows users to reserve rooms
                            based on availability, preventing scheduling conflicts and improving
                            workspace efficiency.
                        </p>
                        <ul>
                            <li>Implemented time-slot based booking with conflict prevention</li>
                            <li>Real-time room availability management</li>
                            <li>Admin controls for room status and scheduling</li>
                            <li>Responsive UI built using Next.js</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>Portfolio Website</h3>
                        <p className="project-meta">Personal Project</p>
                        <p className="project-tech">React</p>
                        <p className="project-desc">
                            A responsive personal portfolio showcasing professional experience,
                            skills, and projects with a clean UI and structured navigation.
                        </p>
                        <ul>
                            <li>Component-based architecture</li>
                            <li>Responsive design</li>
                            <li>Clear content hierarchy</li>
                            <li>Focus on user experience</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>Detection of PCOS using Machine Learning</h3>
                        <p className="project-meta">Academic / Final Year Project</p>
                        <p className="project-tech">Python · Machine Learning · SVM</p>
                        <p className="project-desc">
                            A machine learning–based system to assist in the detection of
                            Polycystic Ovary Syndrome (PCOS) using clinical and physiological
                            parameters. The project aimed to support early diagnosis and improve
                            healthcare decision-making.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;