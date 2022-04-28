import { useEffect, useState } from 'react';

const useService = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(result => result.json())
            .then(data => setService(data))
    }, []);

    return service;

};

export default useService;

// import { useEffect, useState } from 'react';

// const useData = () => {
//     const [courses, setCourses] = useState([]);
//     useEffect(() => {
//         async function getData() {
//             await fetch('../../fakedata/courseData.json')
//                 .then(resp => resp.json())
//                 .then(data => setCourses(data.courses));
//         }
//         getData();
//     }, []);
//     return [courses];
// }

// export default useData;