import React from 'react';
import moment from 'moment';
import ReusableForm from '../../../Components/SharedComponents/ReusableForm/ReusableForm';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdmissionForm = () => {
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_IMG_KEY;

    const admissionFormHandler = (data) => {
        const admissionDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        console.log(admissionDate);
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
        toast.success('Student Added Successfully');
        navigate('/dashboard');
    };

    const fields = [
        { label: "First Name", name: "fName", required: true, type: "text", placeholder: 'First Name' },
        { label: "Last Name", name: "lName", required: true, type: "text", placeholder: 'Last Name'},
        { label: "Gender", name: "gender", required: true, type: "select", placeholder: 'Gender', options: ['Male', 'Female', 'Other'] },
        { label: "Date of Birth", name: "DOB", required: true, type: "date", placeholder: 'Date of Birth', inputType: "date" },
        { label: "Roll", name: "roll", required: true, type: "number", placeholder: 'Roll' },
        { label: "Class", name: "class", required: true, type: "select", placeholder: 'Class', options: ['01', '02', '03', '04', '05'] },
        { label: "Section", name: "section", required: true, type: "select", placeholder: 'Section', options: ['A', 'B', 'C', 'D'] },
        { label: "Admission ID", name: "SID", required: true, type: "text", placeholder: 'Admission ID'},
        { label: "Phone", name: "phone", required: true, type: "tel", placeholder: '018XXXXXXXX'},
        { label: "Short Bio", name: "bio", required: false, type: "text", placeholder: 'Write about the Student...'},
        { label: "Upload Student Photo", name: "img", required: true, type: "file", placeholder: 'First Name'},
    ];

    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
            <h2 className='pb-6 text-xl font-bold'>Add New Students</h2>
            <ReusableForm onSubmit={admissionFormHandler} fields={fields} columnCount={4} />
        </div>
    );
};

export default AdmissionForm;
