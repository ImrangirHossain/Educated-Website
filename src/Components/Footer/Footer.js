import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="text-muted">
            <i className="fab fa-facebook p-3"></i>
            <i className="fab fa-twitter p-3"></i>
            <i className="fab fa-viber p-3" ></i>
            <i className="fab fa-google-plus-g p-3"></i>
            </div>
            <p className="text-white"><small>Designer by <span className="text-warning">Imrangir</span> . All Rights Reserved.</small></p>
        </div>
    );
};

export default Footer;