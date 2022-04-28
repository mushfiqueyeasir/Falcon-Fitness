import React from 'react';
import './About.css';
import ifat from '../../../resource/ifat.jpg';

const About = () => {
    return (
        <div className='container d-flex justify-content-center my-5'>
            <div className="card mb-3 style" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ifat} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <h5 className="card-title">Mushfique Yeasir</h5>
                            <p className="card-text">I'm fresh graduate from CSE department. I wasn't sure which path i'm gonna take as right now we have so many option to go like web, app, graphics designer. It was had to chose but i finally set my goal to become a fullstack web-developer. </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;