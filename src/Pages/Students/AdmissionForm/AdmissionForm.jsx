import React, { useState } from 'react';
import moment from 'moment';
import ReusableForm from '../../../Components/SharedComponents/ReusableForm/ReusableForm';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdmissionForm = () => {
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_IMG_KEY;

    const [loading, setLoading] = useState(false);

    const admissionFormHandler = (data) => {
        setLoading(true);
        const admissionDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    
        // Upload image to imgbb
        fetch(url, { method: 'POST', body: formData })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imageUrl = imgData.data.url;
    
                    // Create student data object
                    const studentData = {
                        fName: data.fName,
                        lName: data.lName,
                        gender: data.gender,
                        DOB: data.DOB,
                        roll: data.roll,
                        class: data.class,
                        section: data.section,
                        SID: data.SID,
                        parent: data.parent,
                        phone: data.phone,
                        address: data.address,
                        img: imageUrl,
                        admissionDate,
                        userType: "Student"
                    };
    
                    // Send student data to backend
                    fetch('http://localhost:3003/api/students', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(studentData)
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        if (data) { 
                            setLoading(false);
                            toast.success("Student added Successfully!!");
                            navigate('/dashboard/students');
                        } else {
                            toast.error("Failed to add student");
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        console.error('Error:', error);
                        toast.error("An error occurred. Please try again.");
                    });                   
                }
            });
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
        { label: "Enter Parent Name", name: "parent", required: true, type: "text", placeholder: 'Parent'},
        { label: "Phone", name: "phone", required: true, type: "tel", placeholder: '018XXXXXXXX'},
        { label: "Address", name: "address", required: false, type: "text", placeholder: 'FEnter your address'},
        { label: "Upload Student Photo", name: "img", required: true, type: "file", placeholder: 'Your PP'},
    ];

    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
            <h2 className='pb-6 text-xl font-bold'>Add New Students</h2>
            <ReusableForm onSubmit={admissionFormHandler} fields={fields} columnCount={4} loading={loading} />
        </div>
    );
};

export default AdmissionForm;
