import moment from 'moment';
import React from 'react';
import { useForm } from 'react-hook-form';
import ReusableForm from '../../../Components/SharedComponents/ReusableForm/ReusableForm';

const AddUser = () => {
    
const admissionFormHandler = (data) => {
    const imageHostKey = process.env.REACT_APP_IMG_KEY;

    const postedDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    const image = data.img[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, { method: 'POST', body: formData })
        .then(res => res.json())
        .then(imgData => {
            if (imgData.success) {
                const imageUrl = imgData.data.url;
                console.log(imageUrl);
            }
        });
    console.log(data);
};

const fields = [
        { label: "First Name", name: "fName", required: true, type: "text", placeholder: 'First Name' },
        { label: "Last Name", name: "lName", required: true, type: "text", placeholder: 'Last Name'},
        { label: "Select User Type", name: "userType", required: true, type: "select", placeholder: 'Select User Type', options: ['Super Admin', 'Admin', 'Teacher', 'Parents', 'Student'] },
        { label: "Gender", name: "gender", required: true, type: "select", placeholder: 'Gender', options: ['Male', 'Female', 'Other'] },
        { label: "Father's Name", name: "fatherName", required: true, type: "text", placeholder: "Father's Name" },
        { label: "Mother's Name", name: "motherName", required: true, type: "text", placeholder: "Mother's Name" },
        { label: "Date of Birth", name: "DOB", required: true, type: "date", placeholder: 'Date of Birth', inputType: "date" },
        { label: "Religion", name: "religion", required: true, type: "select", placeholder: 'Religion', options: ['Islam'] },
        { label: "Joining Date", name: "date", required: true, type: "date", placeholder: 'Joining Date'},
        { label: "Email", name: "email", required: true, type: "email", placeholder: 'Email'},
        { label: "Class", name: "class", required: true, type: "select", placeholder: 'Class', options: ['01', '02', '03', '04', '05'] },
        { label: "Section", name: "section", required: true, type: "select", placeholder: 'Section', options: ['A', 'B', 'C', 'D'] },
        { label: "Select Subject", name: "sub", required: true, type: "select", placeholder: 'Select Subject', options: ["Mathematics", "Science", "History", "Literature", "Geography", "Art", "Computer Science"]},
        { label: "Admission ID", name: "SID", required: true, type: "text", placeholder: 'Admission ID'},
        { label: "Phone", name: "phone", required: true, type: "tel", placeholder: '018XXXXXXXX'},
        { label: "Address", name: "address", required: true, type: "text", placeholder: 'Location'},
        { label: "Blood Group", name: "blood", required: true, type: "select", placeholder: 'Blood Group', options: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
        { label: "Upload Student Photo", name: "img", required: true, type: "file", placeholder: 'First Name'},
        { label: "Short Bio", name: "bio", required: false, type: "text", placeholder: 'Write about the Teacher...'},
    ];

return (
    <div className='bg-white p-6 rounded-md rounded-e-md h-[112vh]'>
        <h2 className='pb-6 text-xl font-bold'>Add New User</h2>
        <ReusableForm onSubmit={admissionFormHandler} fields={fields} columnCount={4} />
    </div>
    );
};

export default AddUser;