import React, { useEffect, useState } from 'react';

const AttendanceChart = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedDate, setSelectedDate] = useState("2024-10-01");
    const dates = Array.from({ length: 31 }, (_, i) => {
        const date = new Date(2024, 9, i + 1);
        return date.toISOString().split('T')[0]; // YYYY-MM-DD format
    }).filter(date => date <= "2024-10-31");

    useEffect(() => {
        setLoading(true);
        fetch('/Attendance/AttendanceSheet.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setAttendanceData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const attendanceForSelectedDate = attendanceData.filter(record => record.Date === selectedDate);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='bg-white rounded-md p-4 w-[80vw] h-[100vh]'>
            <h3 className='py-4 font-bold text-xl text-center'>Attendance Sheet</h3>
            <div className='mb-4'>
                <label htmlFor="date-select" className="mr-2">Select Date:</label>
                <select id="date-select" value={selectedDate} onChange={handleDateChange}>
                    {dates.map(date => (
                        <option key={date} value={date}>
                            {new Date(date).toLocaleDateString('en-US')}
                        </option>
                    ))}
                </select>
            </div>
            <div className='overflow-y-auto h-[72vh] pb-6'>
                <table className="border border-gray-100 w-full">
                    <thead>
                        <tr>
                            <th className='p-2'>Student Name</th>
                            <th className='p-2'>Attendance Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceForSelectedDate.map((record, index) => (
                            <tr key={index} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white'>
                                <td className='p-2'>{record.StudentName}</td>
                                <td className='p-2 text-center'>{record.AttendanceStatus}</td>
                            </tr>
                        ))}
                        {attendanceForSelectedDate.length === 0 && (
                            <tr>
                                <td colSpan="2" className='p-2 text-center'>No records found for this date.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttendanceChart;
