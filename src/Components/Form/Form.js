import React from 'react';

const Form = () => {
    return (
        <div className="my-5">
            <h1>Leave a Message</h1>

            {/* contact form  */}
            
            <div className="form text-start">
                <div className="row row-cols-lg-3 g-4 mx-3 my-2">
                    <div className="col">
                        <input type="text" class="form-control"  placeholder="Name" />
                    </div>
                    <div className="col">
                        <input type="email" class="form-control"  placeholder="Email" />
                    </div>
                    <div className="col">
                        <input type="email" class="form-control"  placeholder="Course name(Optional)" />
                    </div>
                </div>
                <div class="form-floating mx-4">
                    <textarea class="form-control" placeholder="Massage" id="floatingTextarea2" style={{height: '150px'}}></textarea>
                    <label for="floatingTextarea2"><small className="text-muted">massage</small> </label>
                </div>
                <button className="text-start btn btn-primary mx-4 my-3">SEND YOUR MASSAGE</button>
            </div>
        </div>
    );
};

export default Form;