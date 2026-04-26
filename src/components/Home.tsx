import React from "react";
import './styles/Home.css';
import VyshnaviImage from "../assets/images/Vyshnavi_image.jpg";
import GithubIcon from "../assets/images/github-icon.png";
import LinkedinIcon from "../assets/images/linkedin-icon.png";
import MailIcon from "../assets/images/mail-icon.png";

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home-wrapper">

                <div className="home-left">

                    <h1 className="home-title">
                        Hi, I'm Vyshnavi D S
                    </h1>

                    <span className="home-role">SOFTWARE DEVELOPER</span>

                    <p className="home-description">
                        Welcome to my portfolio — a brief overview of my work. I’m a software developer who builds elegant, accessible and
                        high-performance web applications with strong attention to user
                        experience and clean design. I focus on writing scalable, maintainable code that delivers real-world impact.
                    </p>

                </div>

                <div className="home-center">
                    <div className="home-blob">
                        <img src={VyshnaviImage} alt="Vyshnavi_Image" />
                    </div>
                </div>

                <div className="home-icons">
                    <a href="mailto:vyshnavids75@gmail.com" className="mail-icon">
                        <img src={MailIcon} alt="Mail Icon" />
                    </a>

                    <a
                        href="https://github.com/vyshnavids75-cell"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon"
                    >
                        <img src={GithubIcon} alt="Github Icon" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/vyshnavids"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-icon"
                    >
                        <img src={LinkedinIcon} alt="LinkedIn Icon" />
                    </a>
                </div>

            </div>

        </div>
    );
}

export default Home;