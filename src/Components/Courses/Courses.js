import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
        const [course, setCourse] = useState([]);
        useEffect(()=>{
            fetch('./Course.JSON')
            .then(res => res.json())
            .then(data=> setCourse(data))
        },[])
    return (
        <div>
            <h2 className="fw-bold text-start p-3">POPULAR SERVICES</h2>
            <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-0 mx-2">
            {
                course.map(course => <Course
                    key={course.key} course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;