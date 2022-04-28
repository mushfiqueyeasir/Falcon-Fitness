import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { emailValidation, nameValidation, phoneValidation } from '../../../../hooks/validation';
import './PackageDetails.css';
import { useParams } from 'react-router-dom';
import logo from '../../../../resource/logo.png';


const PackageDetails = () => {
    const [mal, setMal] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(result => result.json())
            .then(data => setMal(data));
    }, [])

    const { id } = useParams();

    let price, serviceName, img, description;
    if (mal[id]) {
        price = mal[id].price;
        serviceName = mal[id].serviceName;
        img = mal[id].img;
        description = mal[id].description;
    }


    const [user] = useAuthState(auth);

    const [phoneNumber, setPhoneNumber] = useState(' ');


    // const packageList = useService();

    const handlePhonedBlur = event => {
        setPhoneNumber(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (document.getElementsByClassName('text-success').length === 4) {
            Swal.fire({
                title: 'Success!',
                text: 'Thanks For Your Purchase!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    }


    return (
        <div className='container my-5'>

            <div className="row align-items-center">
                <div className="col-12 col-lg-6 order-2 order-lg-1 px-5 my-5">

                    <form onSubmit={handleSubmit} className="form login">
                        {/* Name */}
                        <div className="form__field">
                            <label><i className={user?.displayName ? 'fa-solid fa-user text-success' : 'fa-solid fa-user'}></i></label>
                            <input value={user?.displayName} onChange={nameValidation} type="text" className="form__input" placeholder="Name" required />
                        </div>
                        {/* Email */}

                        <div className="form__field">
                            <label><i className={user?.displayName ? 'fa-solid fa-envelope text-success' : 'fa-solid fa-envelope'}></i></label>
                            <input value={user?.email} onChange={emailValidation} type="email" className="form__input" placeholder="Email" required />
                        </div>

                        {/* Address */}
                        <div className="form__field">
                            <label><i className="fa-solid fa-map-location-dot"></i></label>
                            <input onBlur={handlePhonedBlur} onChange={nameValidation} type="text" className="form__input" placeholder="Address" required />
                        </div>

                        {/* phone number */}
                        <div className="form__field">
                            <label><i className="fa-solid fa-phone"></i></label>
                            <input onBlur={handlePhonedBlur} onChange={phoneValidation} type="number" className="form__input" placeholder="Phone Number" required />
                        </div>

                        <div className="form__field">
                            <input type="submit" value="Check Out" />
                        </div>

                    </form>

                </div>

                <div className="col-12 col-lg-6 order-1 order-lg-2 my-0">


                    <div className="card align-items-center flex-row row cardRadious ">
                        <div className='col-12  col-lg-7 order'>
                            <img src={img} className=" img-fluid imageRadious" alt="..." />
                        </div>

                        <div className="card-body col-12 col-lg-4">
                            <h5 className="card-title cardTitle">{serviceName}</h5>
                            <p className="card-text cardDetails">{description}</p>
                            <h5 className='cardPrice fs-3 text-center'>Price:${price}</h5>
                        </div>


                    </div>
                </div>
                <div className=' col-12 order-3 d-flex mb-5 justify-content-center align-items-center
                    '>
                    <img src={logo} className='w-25 img-fluid' alt="" />
                </div>

            </div>


        </div>
    );
};

export default PackageDetails;