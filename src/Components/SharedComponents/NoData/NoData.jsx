import React from 'react';

const NoData = ({ message = "No data available", icon, customStyles }) => {
    return (
        <div 
            className={`flex flex-col items-center justify-center h-full py-6 ${customStyles || ""}`}
        >
            {icon && <div className="text-8xl mb-4 text-gray-700">{icon}</div>}
            <p className="text-gray-500 text-lg">{message}</p>
        </div>
    );
};

export default NoData;
