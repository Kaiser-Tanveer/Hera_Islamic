import React, { useEffect, useState } from 'react';
import AllFeeData from './AllFeeData';
import ReusableTable from '../../../Components/SharedComponents/ReusableTable';

const AllFeesCollection = () => {
    const [feeCollections, setFeeCollections] = useState([]);
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
        fetch('/Accounts/AllFeeCollections.json')
        .then(res => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setFeeCollections(data);
            setLoading(false);
        }).catch(err => {
            setError(err.messages);
            setLoading(false)
        })
    }, []);
    const paymentTableHeader = ["ID", "Photo", "Name", "Gender", "Class", "Section", "Fee Type", "Amount", "Status", "Phone", "Email"];


    const renderStudentRow = (feeCollection) => (
        <AllFeeData key={feeCollection.ID} feeCollection={feeCollection} />
    );
    return (
        <div className='bg-white rounded-md p-4 h-[96vh] overflow-auto'>
            <ReusableTable
                title={"All Fee Collections"}
                headers={paymentTableHeader}
                data={feeCollections}
                tableLoading={tableLoading}
                renderRow={renderStudentRow}
            />
        </div>
    );
};

export default AllFeesCollection;