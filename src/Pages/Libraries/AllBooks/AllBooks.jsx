import React, { useEffect, useState } from 'react';

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [laoding, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/Books/Books.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setBooks(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);
    return (
        <div className='bg-white rounded-md p-4'>
            <h3 className='py-4 font-bold text-xl'>All Teachers Data</h3>
            <div className='overflow-auto'>
            <table className="border border-gray-200  overflow-auto border-l-0 p-2 w-[100%]">
                <thead className=''>
                    <tr className=''>
                        <th className='pr-2 py-2 text-nowrap'>ID</th>
                        <th className='p-2 text-left text-nowrap'>Book Name</th>
                        <th className='p-2 text-left text-nowrap'>Subject</th>
                        <th className='p-2 text-left text-nowrap'>Writer</th>
                        <th className='p-2 text-left text-nowrap'>Class</th>
                        <th className='p-2 text-left text-nowrap'>Published</th>
                        <th className='p-2 text-left text-nowrap'>Creating Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => 
                            <tr key={book?.ID} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                                <td className='pr-2 py-2 text-nowrap'>{book?.ID}</td>
                                <td className='p-2 text-nowrap'>{book?.BookName}</td>
                                <td className='p-2 text-nowrap'>{book?.Subject}</td>
                                <td className='p-2 text-nowrap'>{book?.Writer}</td>
                                <td className='p-2 text-nowrap'>{book?.Class}</td>
                                <td className='p-2 text-nowrap'>{book?.PublishedDate}</td>
                                <td className='p-2 text-nowrap'>{book?.CreatingDate}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllBooks;