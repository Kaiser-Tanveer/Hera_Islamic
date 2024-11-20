import React from 'react';
import TableLoader from '../../Shared/Loaders/TableLoader';

const ReusableTable = ({ title, headers, data, tableLoading, renderRow, totalAmount }) => {
    return (
        <>
            <h3 className='pb-4 pt-2 font-bold text-xl'>{title}</h3>
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
                    
                    {totalAmount !== undefined && totalAmount !== null && (
                        <tfoot>
                            <tr className="font-bold">
                                <td colSpan={headers.length - 1} className="text-right px-4 py-2">Total Amount:</td>
                                <td className="px-4 py-2 text-right text-red-500">৳{totalAmount}/-</td>
                            </tr>
                        </tfoot>
                    )}
                </table>
            </div>
        </>
    );
};

export default ReusableTable;
