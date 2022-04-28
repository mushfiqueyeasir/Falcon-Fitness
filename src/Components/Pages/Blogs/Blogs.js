import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container my-5 '>
            <div className="accordion item item " id="accordionExample ">
                <div className="accordion-item item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Difference between authorization and authentication
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Authentication is the process of verifying someone and authorization is the process of verifying what specific  applications, file and data a user can access. The situation is like if you have the key to your house only then you can get in your house.
                            In authentication process, the identity of users are checked for providing the access to the system.While in authorization process, person’s or user’s authorities are checked for accessing the resources.
                            In authentication process, users or persons are verified.
                            While in this process, users or persons are validated.
                            Authentication is done before the authorization process and needs usually  user's login details.While authorization determines What permission do user have?

                        </div>
                    </div>
                </div>
                <div className="accordion-item item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            The Firebase Realtime Database lets us build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. there is many  more other open source firebase alternatives
                            like
                            <ul>
                                <li>Parse</li>
                                <li>Back4App</li>
                                <li>AWS Amplify</li>
                                <li>Kuzzle</li>
                                <li>Couchbase</li>
                                <li>NativeScript</li>
                            </ul>
                            and many more.
                        </div>
                    </div>
                </div>
                <div className="accordion-item item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What other services does firebase provide other than authentication
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            There are many services which Firebase provides, one for Cloud Messaging.Firebase is a great tool to implement notifications, irrespective of the platform because it is fast, reliable, and scalable to handle your requests. Moreover, you won’t be charged a penny for using this service as it’s free of charge.
                            Google Analytics is another service that helps in growing and managing your business. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports.
                            Also Hosting. its easy and fast to host our beautiful sites. and more more service firebase provides


                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogs;