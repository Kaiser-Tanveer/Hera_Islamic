import React from 'react';
import ReusableForm from '../../Components/SharedComponents/ReusableForm/ReusableForm';

const LoginForm = () => {
    const admissionFormHandler = (data) => {
    }
    const fields = [
        { label: "Enter Your Email", name: "email", required: true, type: "email", placeholder: 'Enter Your Email'},
        { label: "Enter Your Password", name: "password", required: true, type: "password", placeholder: 'Enter Password' }
    ];

    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
            <h2 className='pb-6 text-xl font-bold'>Login</h2>
            <ReusableForm onSubmit={admissionFormHandler} fields={fields} columnCount={1} />
        </div>
        );
    };  

export default LoginForm;