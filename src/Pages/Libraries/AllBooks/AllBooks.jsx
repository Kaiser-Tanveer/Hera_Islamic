import React, { useEffect, useState } from 'react';
import ReusableTable from '../../../Components/SharedComponents/ReusableTable';
import AllBooksData from './AllBooksData';

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [laoding, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tableLoading, setTableLoading] = useState(true);

    //---------------------- Table Loader ---------------------//
    useEffect(() => {
        const timer = setTimeout(() => {
            setTableLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

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
    const paymentTableHeader = ["ID", "Book Name", "Subject", "Writer", "Class", "Published Date", "Created Date"];


    const renderStudentRow = (book) => (
        <AllBooksData key={book.ID} book={book} />
    );
    return (
        <div className='bg-white rounded-md p-4 h-[96vh] overflow-auto'>
            <ReusableTable
                title={"Teacher's Payments"}
                headers={paymentTableHeader}
                data={books}
                tableLoading={tableLoading}
                renderRow={renderStudentRow}
            />
        </div>
    );
};

export default AllBooks;