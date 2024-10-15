import React from 'react';
import TableLoader from '../../Shared/Loaders/TableLoader';

const ReusableTable = ({ title, headers, data, tableLoading, renderRow }) => {
    return (
        <>
            <h3 className='py-4 font-bold text-xl'>{title}</h3>
            <div className='overflow-auto'>
                <table className="border border-gray-200 overflow-auto border-l-0 p-2 w-[100%]">
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} className='p-2 text-left text-nowrap'>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableLoading ? (
                            <TableLoader headers={headers} rowCount={12} /> 
                        ) : (
                            data.map(renderRow)
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ReusableTable;
