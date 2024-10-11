import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserIdCard from './UserIdCard';
import './UserIdCard.css';
import { FaPen } from 'react-icons/fa6';

const SingleUser = () => {
    const user = useLoaderData();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user);

    if (!user) {
        return <div>User not found!</div>;
    }

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the updated data to your server
        console.log("Updated User Data: ", formData);
        setIsEditing(false); // Exit edit mode after submission
    };

    return (
        <div className='bg-gray-50 rounded-md p-6 h-[95vh] overflow-auto flex items-start gap-8'>
            <div className='w-[45%]'>
                <UserIdCard user={user} />
            </div>

            <div className='sideArticle bg-white rounded-md p-6 opacity-100 z-[100] shadow-lg flex items-start justify-center gap-8 w-full'>
                <img src={user?.Photo} alt={user?.Name} className='w-[40%] h-full rounded-full border-4 border-sky-500' />
                <div>
                    <div className='w-full flex items-center justify-between text-xl font-bold'>
                        <h2 className='custom-underline'>{user?.Name}</h2>
                        <div className='flex items-center justify-end gap-6'>
                            {
                                !isEditing &&
                                <button
                                onClick={handleEditClick}
                                className='flex items-center text-sky-500 border-b-2 border-sky-500 hover:border-sky-600 hover:text-sky-600 font-bold transition-all duration-300 transform hover:scale-105'
                            >
                                <FaPen className='' />
                            </button>
                            }
                        </div>
                    </div>
                    {isEditing ? (
                        <form onSubmit={handleSubmit} className='py-6 w-full'>
                            <div className='flex flex-col gap-2'>
                                <label>Name:</label>
                                <input
                                    type='text'
                                    name='Name'
                                    value={formData.Name}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Gender:</label>
                                <input
                                    type='text'
                                    name='gender'
                                    value={formData.Gender}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Father's Name:</label>
                                <input
                                    type='text'
                                    name='fName'
                                    value={formData.FathersName}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Mother's Name:</label>
                                <input
                                    type='text'
                                    name='mName'
                                    value={formData.MothersName}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Date of Birth:</label>
                                <input
                                    type='date'
                                    name='DOB'
                                    value={formData.DateOfBirth}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Religion:</label>
                                <input
                                    type='text'
                                    name='religion'
                                    value={formData.Religion}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Father's Occupation:</label>
                                <input
                                    type='text'
                                    name='fOccupation'
                                    value={formData.FathersOccupation}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Email:</label>
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.Email}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Admission Date:</label>
                                <input
                                    type='date'
                                    name='admissionDate'
                                    value={formData.AdmissionDate}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Class:</label>
                                <input
                                    type='number'
                                    name='class'
                                    value={formData.Class}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Secion:</label>
                                <input
                                    type='text'
                                    name='section'
                                    value={formData.Section}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Roll:</label>
                                <input
                                    type='number'
                                    name='roll'
                                    value={formData.Roll}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Address:</label>
                                <input
                                    type='text'
                                    name='address'
                                    value={formData.Address}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                <label>Phone:</label>
                                <input
                                    type='tel'
                                    name='phone'
                                    value={formData.Phone}
                                    onChange={handleChange}
                                    className='border p-1'
                                />
                                {/* Add more fields as needed */}
                                <button type='submit' className='bg-blue-500 text-white py-1 rounded font-bold'>Save</button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <p className='py-6 text-justify'>Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale word moun taiery.</p>
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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleUser;