import React from "react"; // Importing React library for building UI components
// import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation
import "./LandingPage.css"; // Importing styles for Landing Page component

// Functional component for the Landing Page
const Landing_Page = () => {
    return (
        <section className="hero-section"> {/* Hero section container */}
            <div>
                <div data-aos="fade-up" className="flex-hero"> {/* Div container with fade-up animation */}

                    <h1>
                        Your Health<br />

                        {/* Main heading for the Landing Page */}
                        <span className="text-gradient">
                            Our Responsibility {/* Subheading with gradient effect */}
                        </span>
                    </h1>

                    <div className="blob-cont"> {/* Container for blob shape */}
                        <div className="blue blob"></div> {/* Blue blob shape */}
                    </div>

                    <div className="blob-cont"> {/* Another container for blob shape */}
                        <div className="blue1 blob"></div> {/* Blue1 blob shape */}
                    </div>

                    <h4>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
                    </h4> {/* Description text for the Landing Page */}

                    <a href="#services"> {/* Link to scroll down to services section */}
                        <button className="button">Get Started</button> {/* Button to navigate to services section */}
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Landing_Page; // Exporting Landing Page component as default