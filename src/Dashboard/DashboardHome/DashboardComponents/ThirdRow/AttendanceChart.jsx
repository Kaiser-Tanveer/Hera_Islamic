import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AttendanceChart = () => {
  const attendanceData = [
    { name: "Day 1", present: 20, absent: 10 },
    { name: "Day 2", present: 22, absent: 8 },
    { name: "Day 3", present: 18, absent: 12 },
    { name: "Day 4", present: 25, absent: 5 },
    { name: "Day 5", present: 30, absent: 0 },
    { name: "Day 6", present: 28, absent: 2 },
    { name: "Day 7", present: 20, absent: 10 },
    { name: "Day 8", present: 21, absent: 9 },
    { name: "Day 9", present: 19, absent: 11 },
    { name: "Day 10", present: 25, absent: 5 },
    { name: "Day 11", present: 27, absent: 3 },
    { name: "Day 12", present: 30, absent: 0 },
    { name: "Day 13", present: 24, absent: 6 },
    { name: "Day 14", present: 22, absent: 8 },
    { name: "Day 15", present: 18, absent: 12 },
    { name: "Day 16", present: 25, absent: 5 },
    { name: "Day 17", present: 30, absent: 0 },
    { name: "Day 18", present: 28, absent: 2 },
    { name: "Day 19", present: 20, absent: 10 },
    { name: "Day 20", present: 21, absent: 9 },
    { name: "Day 21", present: 19, absent: 11 },
    { name: "Day 22", present: 25, absent: 5 },
    { name: "Day 23", present: 27, absent: 3 },
    { name: "Day 24", present: 30, absent: 0 },
    { name: "Day 25", present: 24, absent: 6 },
    { name: "Day 26", present: 22, absent: 8 },
    { name: "Day 27", present: 18, absent: 12 },
    { name: "Day 28", present: 25, absent: 5 },
    { name: "Day 29", present: 30, absent: 0 },
    { name: "Day 30", present: 28, absent: 2 },
];


    return (
      <Link to='/dashboard/attendance' className='bg-white border border-white hover:border-sky-200 shadow-md rounded-md w-[60%] text-center pr-6 duration-500'>
          <h2 className='text-xl font-bold text-left p-6 rounded-t-md'>Attendance</h2>
          <ResponsiveContainer width="100%" height={176}>
              <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="present" barSize={8} fill="#3137fd" />
                  <Bar dataKey="absent" barSize={8} fill="#F44336" />
              </BarChart>
          </ResponsiveContainer>
      </Link>
    );
};

export default AttendanceChart;