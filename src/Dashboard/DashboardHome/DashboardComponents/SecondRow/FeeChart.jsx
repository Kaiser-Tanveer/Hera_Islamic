import React from 'react';
import { Link } from 'react-router-dom';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const FeeChart = () => {
    const data = [
        { name: "Day 1", amt: 2400, earning: 2400, cost: 1200 },
        { name: "Day 2", amt: 2210, earning: 2290, cost: 1290 },
        { name: "Day 3", amt: 2000, earning: 2000, cost: 1000 },
        { name: "Day 4", amt: 2780, earning: 2500, cost: 1500 },
        { name: "Day 5", amt: 1890, earning: 1900, cost: 950 },
        { name: "Day 6", amt: 2390, earning: 2400, cost: 1200 },
        { name: "Day 7", amt: 3490, earning: 3200, cost: 1600 },
        { name: "Day 8", amt: 3000, earning: 2900, cost: 1450 },
        { name: "Day 9", amt: 2000, earning: 2100, cost: 1050 },
        { name: "Day 10", amt: 3000, earning: 3000, cost: 1500 },
        { name: "Day 11", amt: 2500, earning: 2600, cost: 1300 },
        { name: "Day 12", amt: 2780, earning: 2700, cost: 1350 },
        { name: "Day 13", amt: 1890, earning: 1900, cost: 950 },
        { name: "Day 14", amt: 2390, earning: 2400, cost: 1200 },
        { name: "Day 15", amt: 3490, earning: 3200, cost: 1600 },
        { name: "Day 16", amt: 3000, earning: 2900, cost: 1450 },
        { name: "Day 17", amt: 2000, earning: 2100, cost: 1050 },
        { name: "Day 18", amt: 3000, earning: 3000, cost: 1500 },
        { name: "Day 19", amt: 2500, earning: 2600, cost: 1300 },
        { name: "Day 20", amt: 2780, earning: 2700, cost: 1350 },
        { name: "Day 21", amt: 1890, earning: 1900, cost: 950 },
        { name: "Day 22", amt: 2390, earning: 2400, cost: 1200 },
        { name: "Day 23", amt: 3490, earning: 3200, cost: 1600 },
        { name: "Day 24", amt: 3000, earning: 2900, cost: 1450 },
        { name: "Day 25", amt: 2000, earning: 2100, cost: 1050 },
        { name: "Day 26", amt: 3000, earning: 3000, cost: 1500 },
        { name: "Day 27", amt: 2500, earning: 2600, cost: 1300 },
        { name: "Day 28", amt: 2780, earning: 2700, cost: 1350 },
        { name: "Day 29", amt: 1890, earning: 1900, cost: 950 },
        { name: "Day 30", amt: 2390, earning: 2400, cost: 1200 },
    ];
    

    return (
        <Link to='/dashboard/allFees' className='bg-white border border-white hover:border-sky-200 shadow-md rounded-md w-[65%] text-center pr-6 duration-500'>
            <h2 className='text-xl font-bold text-left p-6 rounded-t-md'>Fees</h2>
        <ResponsiveContainer width="100%" height={176}>
            <ComposedChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="amt" fill="#C8E6C9" stroke="#C8E6C9" />
                <Bar dataKey="earning" barSize={8} fill="#4CAF50" />
                <Line type="monotone" dataKey="cost" stroke="#F44336" />
            </ComposedChart>
        </ResponsiveContainer>  
        </Link>
    );
};

export default FeeChart;