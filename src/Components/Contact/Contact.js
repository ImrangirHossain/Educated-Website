import React from 'react';
import Form from '../Form/Form';
import './Contact.css';
const Contact = () => {
    return (
        <div>
                <div className="contact-text">
                     <h1 className="text-start ps-3">Contact US</h1>
                </div>

              <div className="contact-details row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-0 mx-2 mb-3">
              <div className="col location text-start text-center">
                    <div className="card  h-100">
                    <div className="card-body">
                    <i class="fas fa-map-marker-alt"></i>
                    <h5 className="card-title">Our Location</h5>
                    <p><small>350 Fifth Avenue, 34th floor New York NY 10118-3299 USA</small></p>
                    </div>
                    </div>
                </div>
              <div className="col location text-start text-center">
                    <div className="card  h-100">
                    <div className="card-body">
                    <i class="far fa-id-badge"></i>
                    <h5 className="card-title">Contact us Anytime</h5>
                    <p><small>Mobile: (+1) 800 555 888 <br /> Fax: (+1) 800 666 999</small></p>
                    </div>
                    </div>
                </div>
              <div className="col location text-start text-center">
                    <div className="card  h-100">
                    <div className="card-body">
                    <i class="fas fa-envelope-open-text"></i>
                    <h5 className="card-title">Write Some Words</h5>
                    <p><small>Support24/7@domain.com <br /> Info@domain.com</small></p>
                    </div>
                    </div>
                </div>
              </div>

                <Form></Form>

            </div>
    );
};

export default Contact;