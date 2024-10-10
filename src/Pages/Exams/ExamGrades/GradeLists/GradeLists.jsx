import React, { useEffect, useState } from 'react';

const GradeLists = () => {
    const [grades, setGrades] = useState([]);
    const [laoding, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/Exams/Grades.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setGrades(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);
    return (
        <div className='bg-white rounded-md p-4 h-ful'>
            <h3 className='py-4 font-bold text-xl'>Exam Grade Lists</h3>
            <div className=''>
                <table className="border border-gray-200 w-full">
                    <thead>
                        <tr>
                            <th className='px-2 text-left py-2 text-nowrap'>Grade</th>
                            <th className='p-2 text-left text-nowrap'>Point</th>
                            <th className='pr-2 text-left py-2 text-nowrap'>Percentage From</th>
                            <th className='p-2 text-left text-nowrap'>Percentage To</th>
                            <th className='p-2 text-left text-nowrap'>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            grades.map(grade => (
                                <tr key={grade?.id} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                                    <td className='text-left p-2 text-nowrap'>{grade?.Grade}</td>
                                    <td className='text-left pr-2 py-2 text-nowrap'>{grade?.Point}</td>
                                    <td className='text-left p-2 text-nowrap'>{grade?.PercentageFrom}</td>
                                    <td className='text-left p-2 text-nowrap'>{grade?.PercentageTo}</td>
                                    <td className='text-left p-2 text-nowrap'>{grade?.Comments}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GradeLists;