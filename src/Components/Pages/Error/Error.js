import React from 'react';
import './Error.css';
import dumbble from '../../../resource/dumbble.png'


const Error = () => {
    return (
        <div className='container my-5  errorPage'>
            <h1 className='text-white text-center curved-text '>404</h1>

            <div className='grid'><img src={dumbble} className='img-fluid' alt="" /></div>
            <h1 className='text-white text-center'>Page Not Found!</h1>
        </div>
    );
};

export default Error;