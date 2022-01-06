import React from 'react';
import Courses from '../Courses/Courses';
import FutureWrapper from '../FutureWrapper/FutureWrapper';
import NewsLetter from '../NewsLetter/NewsLetter';
  const Home = () => {
    const homeHeaderStyle= {
        backgroundImage: `url("https://alamgirhkobir.com/imran/wp-content/uploads/2021/10/pic-min.jpg")` ,
        height: '450px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div>
            <div  style={homeHeaderStyle}>
                <div>
                    <h1 className="text-white">START YOUR DREAM TODAY </h1>
                   
                    <br />

                    <button className="btn btn-primary me-3">START A COURSE</button>
                    <button className="btn btn-outline-light">TAKE A TOUR</button>
                </div>              
            </div>

           <div className="">
               <FutureWrapper></FutureWrapper>
               </div>     

            {/* show home services start */}
            <div className="pt-4">
            <Courses></Courses>
            </div>

            {/* newsletter start */}
            <div>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;