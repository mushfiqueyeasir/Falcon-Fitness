import React from 'react';
import { Link } from 'react-router-dom';
import './PackageCard.css';


const PackageCard = ({ service }) => {
    const { id, serviceName, img, price, description } = service;
    const path = '/package/' + id;

    return (
        <div className="col">
            <div className="card align-items-center cardRadious ">
                <img src={img} className="card-img-top img-fluid imageRadious" alt="..." />
                <div className="card-body">
                    <h5 className="card-title cardTitle">{serviceName}</h5>
                    <p className="card-text cardDetails">{description}</p>
                    <h5 className='cardPrice'>Price: ${price}</h5>
                </div>

                <div className="card-footer cardFooter pt-0 mb-3 ">
                    <Link to={path} className='startNow '>Start Now</Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;