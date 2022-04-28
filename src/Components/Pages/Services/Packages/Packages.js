import React, { useEffect, useState } from 'react';
import './Packages.css';
import useService from '../../../../hooks/useService';
import PackageCard from '../PackageCard/PackageCard';
import { Link } from 'react-router-dom';


const Packages = () => {
    const services = useService();
    let length = services.length;
    const location = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    if (!location || location === 'home') {
        length = 3;
    }





    return (
        <article className='py-5 '>
            <div className='container'>
                {
                    length === 3 ?
                        <>
                            <div className='grid'>
                                <h2 className='titleMini text-center'>MY CLASSES</h2>
                                <h3 className='titleOffer text-center'>WHAT I CAN OFFER</h3>
                            </div>
                            <div className='d-flex justify-content-end mb-3 me-2'>
                                <Link to='/package' className='seeAll'>See All <span className="fa-solid fa-circle-chevron-down seeAll"></span></Link>
                            </div>
                        </>
                        :
                        <></>
                }

                <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
                    {
                        services.slice(0, length).map(service => <PackageCard key={service.id} service={service} />)
                    }
                </div>
            </div>
        </article>
    );
};

export default Packages;