import React, { useState } from 'react';
import { ImBin } from 'react-icons/im';
import { Link } from 'react-router-dom';
import Modal from '../../../Components/SharedComponents/ReusablePopUp/Modal';
import useUserActions from '../../../MyHooks/useUserAction';

const AllTeachersData = ({ teacher, setTeachers, teachers }) => {
    const { error, updateUserType, deleteUser } = useUserActions();
    const [showModal, setShowModal] = useState(false);
    const [teacherToDelete, setTeacherToDelete] = useState(null);

    const handleDeleteClick = (teacherID) => {
        setTeacherToDelete(teacherID);
        setShowModal(true);  // Show the modal
    };

    const handleConfirmDelete = () => {
        if (teacherToDelete) {
            deleteUser(teacherToDelete, 'teachers', setTeachers);
            setShowModal(false);  // Close the modal after confirming
            setTeacherToDelete(null);  // Reset the teacher to delete
        }
    };

    const handleCancelDelete = () => {
        setShowModal(false);  // Close the modal if cancelled
        setTeacherToDelete(null);  // Reset the teacher to delete
    };

    return (
        <>
            <tr key={teacher?.roll} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                <td className='pr-2 py-2 text-nowrap'>{teacher?.roll}</td>
                <td className='p-2 text-nowrap'>
                    <Link to="/stu" className='flex items-center gap-2'>
                        <img src={teacher?.img} alt="" className='h-8 w-8 rounded-full' loading='lazy' />
                    </Link>
                </td>
                <td className='p-2 text-nowrap'>
                    <Link to="/stu" className='flex items-center gap-2'>
                        {teacher?.fName + ' ' + teacher.lName}
                    </Link>
                </td>
                <td className='p-2 text-nowrap'>{teacher?.gender}</td>
                <td className='p-2 text-nowrap'>{teacher?.class}</td>
                <td className='p-2 text-nowrap'>{teacher?.section}</td>
                <td className='p-2 text-nowrap'>{teacher?.parent}</td>
                <td className='p-2 text-nowrap'>{teacher?.address}</td>
                <td className='p-2 text-nowrap'>{teacher?.DOB}</td>
                <td className='p-2 text-nowrap'>{teacher?.phone}</td>
                <td className='p-2 text-nowrap'>{teacher?.email}</td>
                <td className='p-2 text-nowrap'>
                    <select onChange={(e) => updateUserType(e, "teachers", teacher, setTeachers)} value={teacher?.userType}>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Parent">Parent</option>
                        <option value="Admin">Admin</option>
                        <option value="Super Admin">Super Admin</option>
                    </select>
                </td>
                <td className='p-2 text-nowrap text-center'>
                    <button 
                        onClick={() => handleDeleteClick(teacher._id)} // Trigger modal on delete
                        className='text-red-600 hover:bg-red-100 p-2 rounded-md border border-gray-50 hover:border-red-500 group duration-500'>
                        <ImBin className='group-hover:scale-110 duration-500' />
                    </button>
                </td>
            </tr>

            {/* Modal for confirmation */}
            {showModal && (
                <Modal
                    isOpen={showModal}
                    onClose={handleCancelDelete}
                    onConfirm={handleConfirmDelete}
                    title="Delete Teacher"
                    confirmText="Delete"
                    cancelText="Cancel"
                >
                    <p>Are you sure you want to delete this teacher?</p>
                </Modal>
            )}
        </>
    );
};

export default AllTeachersData;
