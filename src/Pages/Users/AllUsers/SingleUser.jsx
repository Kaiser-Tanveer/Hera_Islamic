import React from 'react';
import { FaEdit, FaDownload, FaPrint } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import jsPDF from 'jspdf';
import UserIdCard from './UserIdCard';

const SingleUser = () => {
    const user = useLoaderData();

    if (!user) {
        return <div>User not found!</div>;
    }

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        const doc = new jsPDF();
        doc.setFontSize(12);
        
        doc.text(`Name: ${user.Name}`, 10, 10);
        doc.text(`Gender: ${user.Gender}`, 10, 20);
        doc.text(`Father's Name: ${user.FathersName}`, 10, 30);
        doc.text(`Mother's Name: ${user.MothersName}`, 10, 40);
        doc.text(`Date of Birth: ${user.DateOfBirth}`, 10, 50);
        doc.text(`Religion: ${user.Religion}`, 10, 60);
        doc.text(`Father's Occupation: ${user.FathersOccupation}`, 10, 70);
        doc.text(`Email: ${user.Email}`, 10, 80);
        doc.text(`Admission Date: ${user.AdmissionDate}`, 10, 90);
        doc.text(`Class: ${user.Class}`, 10, 100);
        doc.text(`Section: ${user.Section}`, 10, 110);
        doc.text(`Roll: ${user.Roll}`, 10, 120);
        doc.text(`Address: ${user.Address}`, 10, 130);
        doc.text(`Phone: ${user.Phone}`, 10, 140);

        // Save the PDF
        doc.save(`${user.Name}_data.pdf`);
    };

    return (
        <div className='bg-gray-50 rounded-md p-6 h-[95vh] overflow-hidden flex items-start gap-8'>
            <div className='w-[45%]'>
                <UserIdCard
                    user={user}
                />
            </div>

            <div className='bg-white rounded-md p-6 opacity-100 z-[100] shadow-lg flex items-start justify-center gap-8 w-full'>
                <img src={user?.Photo} alt={user?.Name} className='w-[40%]' />
                <div>
                    <div className='w-full flex items-center justify-between text-xl font-bold'>
                        <h2>{user?.Name}</h2>
                        <div className='flex items-center justify-end gap-6'>
                            <FaEdit />
                            <FaDownload onClick={handleDownload} className='cursor-pointer' />
                            <FaPrint onClick={handlePrint} className='cursor-pointer' />
                        </div>
                    </div>
                    <p className='py-6 text-justify'>Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale word moun taiery.Aliquam erat volutpaturabiene natis massa sedde sodale word moun taiery.</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.Name}</td>
                            </tr>
                            <tr>
                                <td>Gender :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.Gender}</td>
                            </tr>
                            <tr>
                                <td>Father :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.FathersName}</td>
                            </tr>
                            <tr>
                                <td>Mother :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.MothersName}</td>
                            </tr>
                            <tr>
                                <td>Date of Birth :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.DateOfBirth}</td>
                            </tr>
                            <tr>
                                <td>Religion :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.Religion}</td>
                            </tr>
                            <tr>
                                <td>Father's Occupation :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.FathersOccupation}</td>
                            </tr>
                            <tr>
                                <td>Email :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.Email}</td>
                            </tr>
                            <tr>
                                <td>Admission Date :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.AdmissionDate}</td>
                            </tr>
                            <tr>
                                <td>Class :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.Class}</td>
                            </tr>
                            <tr>
                                <td>Section :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.Section}</td>
                            </tr>
                            <tr>
                                <td>Roll :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.Roll}</td>
                            </tr>
                            <tr>
                                <td>Address :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.Address}</td>
                            </tr>
                            <tr>
                                <td>Phone :</td>
                                <td className='font-bold pl-6 pb-4'>{user?.Phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;
