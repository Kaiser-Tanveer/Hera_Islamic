import React from 'react';

const AllBooksData = ({book}) => {
    return (
        <tr key={book?.ID} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
            <td className='pr-2 py-2 text-nowrap'>{book?.ID}</td>
            <td className='p-2 text-nowrap'>{book?.BookName}</td>
            <td className='p-2 text-nowrap'>{book?.Subject}</td>
            <td className='p-2 text-nowrap'>{book?.Writer}</td>
            <td className='p-2 text-nowrap'>{book?.Class}</td>
            <td className='p-2 text-nowrap'>{book?.PublishedDate}</td>
            <td className='p-2 text-nowrap'>{book?.CreatingDate}</td>
        </tr>
    );
};

export default AllBooksData;