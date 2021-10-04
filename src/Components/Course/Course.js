import React from 'react';
import Rating from 'react-rating';

const Course = (props) => {
    const {name, price,discription,rating,image} = props.course;
    return (
        <div>
              <div className="col text-start">
                    <div className="card  h-100">
                    <img height="225" src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5>Price: ${price}</h5>
                    <h6>Avg. Rating: {<Rating
                     initialRating={rating}
                     emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"
                    ></Rating>}</h6>
                      <p><small> {discription}</small></p>

                      <button className="btn btn-primary">Add To Cart</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Course;