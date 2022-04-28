import React from 'react';
import './ArticleFacilities.css';
const ArticleFacilities = () => {
    return (
        <article className='py-5 m-0 articleBody'>
            <div className="container d-flex flex-column  align-items-center">
                <h2 className='titleMini text-center'>WHY CHOSE ME?</h2>
                <h3 className='titleResult text-center'>PUSH YOUR LIMITS FORWARD</h3>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-3  g-5'>

                    <div className="col">
                        <div className='d-flex justify-content-center'>
                            <h1 className='imageIcon p-3 rounded-circle'><i className="fa-solid fa-bicycle"></i></h1>
                        </div>
                        <h4 className='flexTitle text-center'>Modern Equipment</h4>
                        <p className='text-center flexParagraph'>I provide all the antique and modern equipment guidance and will pick out the best suited for you.  </p>
                    </div>

                    <div className="col">
                        <div className='d-flex justify-content-center'>
                            <h1 className='imageIcon p-3 px-4 rounded-circle'><i className="fa-solid fa-utensils"></i></h1>
                        </div>
                        <h4 className='flexTitle text-center'>Healthy nutrition plan</h4>
                        <p className='text-center flexParagraph'>I am a professional nutritionist. I'll provide you the perfect meal plan you need to achieve your goal. </p>
                    </div>

                    <div className="col">
                        <div className='d-flex justify-content-center'>
                            <h1 className='imageIcon p-3 rounded-circle'><i className="fa-solid fa-dumbbell"></i></h1>
                        </div>
                        <h5 className='flexTitle text-center'>Proffesponal training plan</h5>
                        <p className='text-center flexParagraph'>Based on your unique body structure and your dream goal i'll provide you the best suited training plan.</p>
                    </div>

                    <div className="col">
                        <div className='d-flex justify-content-center'>
                            <h1 className='imageIcon p-3 rounded-circle'><i className="fa-solid fa-heart-pulse"></i></h1>
                        </div>
                        <h4 className='flexTitle text-center'>Unique to your needs</h4>
                        <p className='text-center flexParagraph'>Online or one to one training i'll always provide unique guidance of my client based on their needs. </p>
                    </div>

                </div>
            </div>
        </article>
    );
};

export default ArticleFacilities;