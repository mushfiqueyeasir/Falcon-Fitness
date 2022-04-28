import React, { useEffect, useState } from 'react';
import useService from './useService';
import axios from "axios";

const useSpecial = () => {

    const [course, setCourse] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('temp.json')
                .then(result => setCourse(result))

        }
        fetchData();
    }, []);

    return course;
};

export default useSpecial;