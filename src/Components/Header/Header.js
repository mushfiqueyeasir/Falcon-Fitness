import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../resource/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Auth/Loading/Loading';


const Header = () => {
    const [navbar, setnavBar] = useState(true);

    const changeBgScroll = () => {
        if (window.scrollY <= 100) {
            setnavBar(false)
        } else {
            setnavBar(true);
        }
    }
    window.addEventListener('scroll', changeBgScroll);


    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading />
    }
    let url;
    if (user) {
        url = user.photoURL;
        if (!url) {
            url = 'https://i.ibb.co/hdR3wJJ/businessman-character-avatar-isolated-24877-60111.jpg';
        }
    }



    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <nav id='navBar' className={
            navbar ?
                "navbar navbar-expand-lg navbar-dark bg-black sticky-top"

                :
                "navbar navbar-expand-lg navbar-dark bg sticky-top"}>
            <div className="container">
                <img src={logo} className='logo img-fluid' alt='Logo' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home"  >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/package">Packages</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/result">Result</NavLink>
                        </li>

                        {
                            user ?
                                <>
                                    <li className="nav-item">
                                        <button onClick={handleSignOut} className="nav-link signOut">Sign Out</button>

                                    </li>

                                    <li className='nav-item profileDP'>
                                        <img src={url} className="img-fluid rounded-circle " alt="" />
                                    </li>
                                </>

                                :
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/join">Join</NavLink>
                                </li>

                        }




                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;