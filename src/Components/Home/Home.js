import React from 'react';
import Courses from '../Courses/Courses';
import NewsLetter from '../NewsLetter/NewsLetter';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className="home-top-section">
                <div>
                    <h1 className="text-white">START YOUR DREAM TODAY </h1>
                    <br />

                    <button className="btn btn-primary me-3">START A COURSE</button>
                    <button className="btn btn-outline-light">TAKE A TOUR</button>
                </div>              
            </div>
            <div className="pt-4">
            <Courses></Courses>
            </div>
            <div>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;