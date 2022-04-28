import React from 'react';
import './ResultCard.css';

const starArray = [1, 2, 3, 4, 5];
const ResultCard = ({ review }) => {



    const { name, img, rating, description } = review;
    return (
        <div className="col">
            <div className="mainBody row">
                <div className="col-12 col-lg-6 d-flex">
                    <img src={img} className="img-fluid imag py-2 zoom" alt="..." />
                </div>
                <div className="col-12 col-lg-6 cardBody ">
                    <i className="fa-solid fa-quote-left fs-1"></i>
                    <p className="m-0 cardDescription">{description}</p>
                    <h5 className='text-end cardName'>- {name}</h5>
                    {
                        starArray.slice(0, rating).map(star => <i key={star} className="fa-solid fa-star"></i>)
                    }
                    {
                        starArray.slice(rating, 5).map(star => <i key={star} className="fa-solid fa-star-half"></i>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ResultCard;