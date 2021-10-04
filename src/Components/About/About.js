import React from 'react';
import './About.css';
import img from '../../images/whychoose2.jpg'

const About = () => {
    return (
        <div className>
            <div className="about text-white">
                <div className="overlay"></div>
                <div className="about-text">
                <h1>About US</h1>
                <p className="w-50 mx-auto">The purpose of a mentor is to help you grow as a person and become the best version of yourself. This may involve helping you achieve your personal or career goals, introducing you to new ways of thinking, challenging your limiting assumptions, sharing valuable life lessons, and much more</p>
                <button className="btn btn-outline-light rounded">EXPLORE NOW</button>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4 my-5 mx-5">
                <div className="col">
                    <img className="img-fluid" src={img} />
                </div>
                <div className="col">
                    <h3>Why Choose Us</h3>
                    <p>We believe the skillset  experience we possess not only shall bring value to you, but in turn shall also help us to acquire experience  sharpen our skills amidst you professional work. If given an opportunity we positively look forward to give our best to you.</p>
                </div>
            </div>
        </div>
    );
};

export default About;