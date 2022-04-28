import React from 'react';
import './Results.css';
import ResultCard from '../ResultCard/ResultCard';
import useReviews from '../../../../hooks/useReviews';
import { Link } from 'react-router-dom';

const Results = () => {
    const reviews = useReviews();
    let length = reviews.length;
    const location = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    if (!location || location === 'home') {
        length = 2;
    }
    return (
        <div className='bgbody py-5' >
            <div className='container'>

                {
                    length === 2 ?
                        <>

                            <h2 className='titleMini text-center'>SUCCESS STORIES</h2>
                            <h3 className='titleResult text-center'>WHAT MY AMAZING CLIENTS SAY</h3>
                            <div className='d-flex justify-content-end mb-3 me-2'>
                                <Link to='/result' className='seeAll'>See All  <span className="fa-solid fa-circle-chevron-down"></span></Link>
                            </div></>

                        :
                        <></>
                }

                <div className="row row-cols-1 row-cols-md-2  g-5">
                    {
                        reviews.slice(0, length).map(review => <ResultCard key={review.id} review={review}></ResultCard>)
                    }
                </div>
            </div>
        </div>
    )

};

export default Results;