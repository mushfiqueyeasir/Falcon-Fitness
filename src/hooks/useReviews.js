import { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(result => result.json())
            .then(data => setReviews(data))
    }, []);

    return reviews;
};

export default useReviews;