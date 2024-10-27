import React, { useEffect, useState } from 'react';
import { TiTick, TiDelete } from 'react-icons/ti';

const AttendanceSheet = () => {
    const [students, setStudents] = useState([]);

    const [laoding, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tableLoading, setTableLoading] = useState(true);

    //---------------------- Table Loader ---------------------//
    useEffect(() => {
        const timer = setTimeout(() => {
            setTableLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        fetch('/Attendance/AttendanceSheet.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setStudents(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);

    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const daysInCurrentMonth = getDaysInMonth(month, year);

    const toggleAttendance = (studentIndex, dayIndex) => {
        const newAttendance = [...students];
        if (!newAttendance[studentIndex].attendance[dayIndex]) {
            newAttendance[studentIndex].attendance[dayIndex] = true; // Mark as present
        } else {
            newAttendance[studentIndex].attendance[dayIndex] = false; // Mark as absent
        }
        setStudents(newAttendance);
    };

    const changeMonth = (direction) => {
        setMonth((prevMonth) => {
            if (direction === 'next') {
                return prevMonth === 11 ? 0 : prevMonth + 1;
            }
            return prevMonth === 0 ? 11 : prevMonth - 1;
        });
        if (direction === 'next' && month === 11) {
            setYear(year + 1);
        }
        if (direction === 'prev' && month === 0) {
            setYear(year - 1);
        }
    };

    const getDayName = (day) => {
        const date = new Date(year, month, day);
        return date.toLocaleString('en-US', { weekday: 'long' });
    };

    const isWeekend = (day) => {
        const date = new Date(year, month, day);
        const dayOfWeek = date.getDay();
        return dayOfWeek === 0 || dayOfWeek === 6;
    };

    return (
        <div className='bg-white rounded-md p-4 w-[80vw] h-[100vh]'>
            <h3 className='py-4 font-bold text-xl text-center'>Attendance Sheet Of Class One: Section A</h3>
            <div className='flex justify-between mb-4'>
                <button onClick={() => changeMonth('prev')} className='px-4 py-2 bg-sky-300 rounded'>Previous</button>
                <h4 className='text-lg'>{months[month]} {year}</h4>
                <button onClick={() => changeMonth('next')} className='px-4 py-2 bg-sky-300 rounded'>Next</button>
            </div>
            <div className='overflow-y-auto h-[72vh] pb-6'>
                <table className="border border-gray-100 w-full">
                    <thead>
                        <tr>
                            <th className='p-2 sticky top-0 bg-white'>Students</th>
                            {Array.from({ length: daysInCurrentMonth }, (_, i) => (
                                <th key={i} className={`px-2 sticky top-0 ${isWeekend(i + 1) ? 'bg-red-200 text-red-600' : 'bg-white'}`}>
                                    {i + 1}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, studentIndex) => (
                            <tr key={studentIndex} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                                <td className='p-2 text-nowrap'>{student.StudentName}</td>
                                {Array.from({ length: daysInCurrentMonth }, (_, dayIndex) => {
                                    const isWeekendDay = isWeekend(dayIndex + 1);
                                    return (
                                        <td key={dayIndex} className='text-center pr-2 py-2 text-nowrap'>
                                            {isWeekendDay ? (
                                                <span className='text-red-500'>{(getDayName(dayIndex + 1).slice(0, 3))}</span>
                                            ) : (
                                                <button onClick={() => toggleAttendance(studentIndex, dayIndex)} className='focus:outline-none'>
                                                    {student.AttendanceStatus[dayIndex] === true ? <TiTick className='text-blue-700' /> : student.AttendanceStatus[dayIndex] === false ? <TiDelete className='text-red-500' /> : ''}
                                                </button>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttendanceSheet;
