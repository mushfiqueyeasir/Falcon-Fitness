import React from 'react';
import './Footer.css';
import logo from '../../resource/logo.png'
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    // console.log = console.warn = console.error = () => { };

    return (
        <footer className='bg-black'>
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <img src={logo} className="img-fluid w-25" alt="" />
                        <p className='text-white'>Your starting point does not matter. Whether you are 50kg or 150kg, I will guide you through the process step by step with a personalised, goal-focused approach that delivers quantifiable outcomes.</p>
                    </div>

                    <div className="col-6 col-lg-2  d-flex justify-content-center mt-4">
                        <ul className='text-white '>
                            <h4>Useful Links</h4>
                            <li><Link to='/result' className='Links'>Result</Link></li>
                            <li><Link to='/package' className='Links'>Package</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-lg-2 mt-4 ">
                        <ul className='text-white'>
                            <h4 >Support</h4>
                            <li><Link to='/join' className='Links'>Join</Link></li>
                            <li><Link to='/about' className='Links'>About</Link></li>

                        </ul>
                    </div>
                    <div className="col-12 col-lg-4  mt-4 text-white">
                        <div>
                            <h4 className='fw-bolder '>Tips & Guides</h4>
                            <p className='my-3'>Physical fitness may  help prevent depression, anxiety</p>
                            <hr />
                            <p className='mt-2'>AAs a rule of thumb, weight loss is generally 75 percent diet and 25 percent exercise</p>
                        </div>

                    </div>
                </div>
                <hr className='' />
                <h5 className='text-white text-center my-3 fs-6'>Copyright ©2022 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by <a target="__blank" className='owner' href='https://github.com/mushfiqueyeasir'>Mushfique Yeasir</a></h5>
            </div>

        </footer>
    );
};

export default Footer;