import React from 'react';

const TableLoader = ({ headers, rowCount = 5 }) => { // Default to 5 rows if not specified
    return (
        <>
            {Array.from({ length: rowCount }).map((_, index) => (
                <tr key={index} className='w-[100vw] overflow-hidden border-t'>
                    {headers.map(header => (
                        <td key={header} className='border-y py-1 px-2'>
                            <h4 className='h-4 w-24 bg-gray-300 rounded-md my-2'></h4> {/* Adjust width for consistency */}
                        </td>
                    ))}
                </tr>
            ))}
        </>
    );
};

export default TableLoader;
