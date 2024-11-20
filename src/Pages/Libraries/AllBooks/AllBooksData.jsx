import React from 'react';

const AllBooksData = ({book}) => {
    return (
        <tr key={book?.ID} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
            <td className='pr-2 py-2 text-center text-nowrap'>{book?.subCode}</td>
            <td className='p-2 text-nowrap'>{book?.bookName}</td>
            <td className='p-2 text-nowrap'>{book?.subject}</td>
            <td className='p-2 text-nowrap italic'>{book?.writer}</td>
            <td className='p-2 text-nowrap'>{book?.class}</td>
            <td className='p-2 text-nowrap'>{book?.section}</td>
            <td className='p-2 text-nowrap'>{book?.publishedDate}</td>
            <td className='p-2 text-nowrap'>{book?.uploadedDate}</td>
        </tr>
    );
};

export default AllBooksData;