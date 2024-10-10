import React, { useEffect, useState } from 'react';

const AllExamSchedules = () => {
    const [exams, setExams] = useState([]);
    const [laoding, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/Exams/ExamSchedules.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setExams(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);
    return (
        <div className='bg-white rounded-md p-4 h-full'>
            <h3 className='py-4 font-bold text-xl'>All Exams Schedule</h3>
            <div className=''>
                <table className="border border-gray-200 w-full">
                    <thead>
                        <tr>
                            <th className='pr-2 text-left py-2 text-nowrap'>Exam Name</th>
                            <th className='p-2 text-left text-nowrap'>Subject</th>
                            <th className='pr-2 text-left py-2 text-nowrap'>Class</th>
                            <th className='p-2 text-left text-nowrap'>Section</th>
                            <th className='p-2 text-left text-nowrap'>Time</th>
                            <th className='p-2 text-left text-nowrap'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            exams.map(exam => (
                                <tr key={exam?.ID} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                                    <td className='text-left p-2 text-nowrap'>{exam?.ExamName}</td>
                                    <td className='text-left pr-2 py-2 text-nowrap'>{exam?.Subject}</td>
                                    <td className='text-left p-2 text-nowrap'>{exam?.Class}</td>
                                    <td className='text-left p-2 text-nowrap'>{exam?.Section}</td>
                                    <td className='text-left p-2 text-nowrap'>{exam?.Time}</td>
                                    <td className='text-left p-2 text-nowrap'>{exam?.Date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllExamSchedules;