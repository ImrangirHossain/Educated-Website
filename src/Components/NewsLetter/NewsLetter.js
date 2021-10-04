import React from 'react';
import './NewsLetter.css';
const NewsLetter = () => {
    return (
        <div className="news-letter">
            <div className="news-letter-content">
            <h2 className="fw-bold">NEWSLETTER</h2>
            <p><small>Subscribe now and receive weekly newsletter with educational materials, new <br /> courses, interesting posts, popular books and much more!</small></p>
            <div class="input-group w-25 mx-auto mb-3">
            <input type="text" class="form-control" placeholder="Your Email Here" aria-describedby="button-addon2"/>
            <button  class="btn btn-warning text-white" type="button" id="button-addon2">SUBSCRIBE</button>
            </div>
            </div>
        </div>
    );
};

export default NewsLetter;