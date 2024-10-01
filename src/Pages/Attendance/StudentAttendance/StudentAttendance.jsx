import React from 'react';
import { TiTick } from 'react-icons/ti';

const StudentAttendance = () => {
    const students = [];
    for (let i = 1; i < 70; i++) {
        students.push(i);
    }
    const days = [];
    for (let i = 1; i < 31; i++) {
        days.push(i);
    }

    return (
        <div className='bg-white rounded-md p-4 w-[80vw] h-[98vh]'>
            <h3 className='py-4 font-bold text-xl text-center'>Attendance Sheet Of Class One: Section A, April 2021</h3>
            <div className='overflow-y-auto h-[72vh] pb-6'> {/* Set the height here */}
                <table className="border border-gray-100 w-full">
                    <thead>
                        <tr>
                            <th className='p-2 sticky top-0 bg-white'>Days</th>
                            {
                                days.map(day => (
                                    <th key={day} className='px-2 sticky top-0 bg-white'>{day}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student, index) => (
                            <tr key={index} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                                <td className='p-2 text-nowrap'>{student}. Unknown Name</td>
                                {
                                    days.map(row => (
                                        <td key={row} className='text-center pr-2 py-2 text-nowrap text-blue-500 px-2'>
                                            <TiTick />
                                        </td>
                                    ))
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentAttendance;
